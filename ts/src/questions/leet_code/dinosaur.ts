const path = require('path');
import {open} from 'node:fs/promises';

export type Diet = 'herbivore' | 'omnivore' | 'carnivore';
export type Stance = 'quadrupedal' | 'bipedal';

export type Dinosaur = {
  name: string;
  legLength?: number;
  strideLength?: number;
  stance?: Stance;
  diet?: Diet;
  speed?: number;
};

// The Meta interview question involving CSV files and dinosaurs requires writing a program to read two CSV files,
// calculate the speed of bipedal dinosaurs using a given formula, and print their names from fastest to slowest.
// The formula provided is:
//
// speed=(
// (LEG_LENGTH / STRIDE_LENGTH - 1) * LEG_LENGTH * 9.8
//
// The first CSV file contains statistics about various dinosaurs, including their names, leg lengths, and diets.
// The second file includes additional data such as stride lengths and stances.
export async function dino(): Promise<string[]> {
  // Extra back dir for build path
  const filePathLegs = path.join(
    __dirname,
    '../../../../assets/dinosaur.leg_length.csv'
  );
  const filePathStride = path.join(
    __dirname,
    '../../../../assets/dinosaur.stride_length.csv'
  );

  try {
    const dinosaurs: Map<string, Dinosaur> = new Map();

    const legFile = await open(filePathLegs);
    const strideFile = await open(filePathStride);

    for await (const line of legFile.readLines()) {
      const [name, legLength, diet] = line.split(',');
      if (name === 'NAME') {
        continue;
      }
      const dino = dinosaurs.get(name);

      if (!dino) {
        dinosaurs.set(name, {
          name,
          legLength: parseFloat(legLength),
          diet: diet as Diet,
        });
        continue;
      }

      dino.diet = diet as Diet;
      dino.legLength = parseFloat(legLength);
    }

    for await (const line of strideFile.readLines()) {
      const [name, strideLength, stance] = line.split(',');
      if (name === 'NAME') {
        continue;
      }
      const dino = dinosaurs.get(name);

      if (!dino) {
        dinosaurs.set(name, {
          name,
          strideLength: parseFloat(strideLength),
          stance: stance as Stance,
        });
        continue;
      }

      dino.stance = stance as Stance;
      dino.strideLength = parseFloat(strideLength);
    }

    const maxDinoHeap = new MaxDinoHeap();

    dinosaurs.forEach(dino => maxDinoHeap.pushDino(dino));

    const finalList: string[] = [];

    while (maxDinoHeap.data.length) {
      const popedDino = maxDinoHeap.popDino();
      if (!popedDino) {
        continue;
      }
      finalList.push(popedDino.name);
    }

    return finalList;
  } catch (e) {
    console.log('error: ', e);
    process.exit(1);
  }
}

type SpeedDino = [number, Dinosaur];

class MaxDinoHeap {
  data: SpeedDino[] = [];
  constructor() {}

  public pushDino(dino: Dinosaur) {
    const speedDino = this.getSpeedDino(dino);
    if (!speedDino) {
      return;
    }

    this.data.push(speedDino);

    if (this.data.length < 2) {
      return;
    }

    this.bubbleUp();
  }

  public popDino(): null | Dinosaur {
    if (this.data.length < 0) {
      return null;
    }

    if (this.data.length === 1) {
      return this.data.pop()![1];
    }

    const dinoToReturn = this.data[0][1];

    this.data[0] = this.data.pop()!;
    this.heapifyDown();

    return dinoToReturn;
  }

  private heapifyDown(): void {
    let currIdx = 0;
    let largestChildIdx = this.getHighestChild(currIdx);

    if (largestChildIdx < 0) {
      return;
    }

    while (this.data[currIdx][0] < this.data[largestChildIdx][0]) {
      this.swap(currIdx, largestChildIdx);

      currIdx = largestChildIdx;
      largestChildIdx = this.getHighestChild(currIdx);

      if (largestChildIdx < 0) {
        return;
      }
    }
  }

  private bubbleUp(): void {
    let currIdx = this.data.length - 1;
    let parentIdx = this.getParent(currIdx);

    if (parentIdx < 0) {
      return;
    }

    while (this.data[parentIdx][0] < this.data[currIdx][0]) {
      this.swap(parentIdx, currIdx);

      currIdx = parentIdx;
      parentIdx = this.getParent(currIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  private getSpeedDino(dino: Dinosaur): SpeedDino | null {
    if (!dino.strideLength || !dino.legLength || !dino.stance) {
      console.log('No leg length or stride length: ' + dino.name);
      return null;
    }

    if (dino.stance !== 'bipedal') {
      return null;
    }

    const speed =
      (dino.strideLength / dino.legLength - 1) *
      Math.sqrt(dino.legLength * 9.8);
    return [speed, dino];
  }

  private getParent(idx: number): number {
    const prospectiveParentIdx = Math.floor((idx - 1) / 2);
    if (prospectiveParentIdx < 0) {
      return -1;
    }

    return prospectiveParentIdx;
  }

  private getLeftChild(idx: number): number {
    const prospectiveLeftIdx = idx * 2 + 1;
    if (prospectiveLeftIdx > this.data.length - 1) {
      return -1;
    }
    return prospectiveLeftIdx;
  }

  private getRightChild(idx: number): number {
    const prospectiveRightIdx = idx * 2 + 2;
    if (prospectiveRightIdx > this.data.length - 1) {
      return -1;
    }
    return prospectiveRightIdx;
  }

  private getHighestChild(idx: number): number {
    const left = this.getLeftChild(idx);
    const right = this.getRightChild(idx);

    if (left < 0 && right < 0) {
      return -1;
    }

    if (left < 0) {
      return right;
    }

    if (right < 0) {
      return left;
    }

    return this.data[left][0] > this.data[right][0] ? left : right;
  }

  private swap(idxOne: number, idxTwo: number): void {
    [this.data[idxOne], this.data[idxTwo]] = [
      this.data[idxTwo],
      this.data[idxOne],
    ];
  }
}
