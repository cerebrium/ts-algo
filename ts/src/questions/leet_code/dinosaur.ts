const path = require('path');
import {open} from 'node:fs/promises';

export type Stance = 'quadrupedal' | 'bipedal';

export type Dinosaur = {
  name: string;
  legLength?: number;
  strideLength?: number;
  stance?: Stance;
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
  const dinoList: string[] = [];
  const legLengthPath = path.join(
    __dirname + '../../../../../assets/dinosaur.leg_length.csv'
  );
  const strideLengthPath = path.join(
    __dirname + '../../../../../assets/dinosaur.stride_length.csv'
  );

  const dinos: Map<string, Dinosaur> = new Map();

  try {
    const legLengthFile = await open(legLengthPath);
    const strideLengthFile = await open(strideLengthPath);

    for await (const line of legLengthFile.readLines()) {
      const [name, legLength, _] = line.split(',');
      if (name === 'NAME') {
        continue;
      }

      const dino = dinos.get(name);
      if (dino) {
        dino.legLength = parseFloat(legLength);
        continue;
      }

      dinos.set(name, {name, legLength: parseFloat(legLength)});
    }

    for await (const line of strideLengthFile.readLines()) {
      const [name, strideLength, stance] = line.split(',');
      if (name === 'NAME') {
        continue;
      }

      const dino = dinos.get(name);

      if (dino && dino.legLength) {
        dino.stance = stance as Stance;
        dino.strideLength = parseFloat(strideLength);
        dino.speed =
          (dino.strideLength / dino.legLength - 1) *
          Math.sqrt(dino.legLength * 9.8);
      }
    }

    // Have map of speed dinos
    const maxHeap = new MaxHeap();

    dinos.forEach(dino => {
      if (dino.stance === 'bipedal') {
        maxHeap.push(dino);
      }
    });

    while (maxHeap.data.length) {
      dinoList.push(maxHeap.pop()!.name);
    }

    return dinoList;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

class MaxHeap {
  data: Dinosaur[] = [];

  constructor() {}

  public push(dino: Dinosaur): void {
    this.data.push(dino);

    if (this.data.length === 1) {
      return;
    }

    this.bubbleUp();
  }

  private bubbleUp(): void {
    let currIdx: number = this.data.length - 1;
    let parentIdx: number = this.getParenIdx(currIdx);

    if (parentIdx < 0) {
      return;
    }

    while (this.data[currIdx].speed! > this.data[parentIdx].speed!) {
      this.swap(currIdx, parentIdx);

      currIdx = parentIdx;
      parentIdx = this.getParenIdx(currIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  public pop(): Dinosaur | null {
    if (!this.data.length) {
      return null;
    }
    const dino = this.data[0];

    if (this.data.length === 1) {
      this.data = [];
      return dino;
    }

    // @ts-ignore --> length check above solves this
    this.data[0] = this.data.pop();

    this.heapifyDown();

    return dino;
  }

  private heapifyDown(): void {
    let currIdx = 0;
    let largestChildIdx = this.getHighestChildIdx(currIdx);

    if (largestChildIdx < 0) {
      return;
    }

    while (this.data[largestChildIdx].speed! > this.data[currIdx].speed!) {
      this.swap(largestChildIdx, currIdx);

      currIdx = largestChildIdx;
      largestChildIdx = this.getHighestChildIdx(currIdx);

      if (largestChildIdx < 0) {
        return;
      }
    }
  }

  private getParenIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private getLeftChild(idx: number): number {
    const pIdx: number = Math.floor(idx * 2 + 1);

    if (pIdx > this.data.length - 1) {
      return -1;
    }

    return pIdx;
  }

  private getRightChild(idx: number): number {
    const pIdx: number = Math.floor(idx * 2 + 2);

    if (pIdx > this.data.length - 1) {
      return -1;
    }

    return pIdx;
  }

  private getHighestChildIdx(idx: number): number {
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

    if (this.data[left].speed! > this.data[right].speed!) {
      return left;
    }

    return right;
  }

  private swap(idxOne: number, idxTwo: number): void {
    [this.data[idxOne], this.data[idxTwo]] = [
      this.data[idxTwo],
      this.data[idxOne],
    ];
  }
}
