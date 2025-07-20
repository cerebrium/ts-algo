"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dino = void 0;
const path = require('path');
const promises_1 = require("node:fs/promises");
// The Meta interview question involving CSV files and dinosaurs requires writing a program to read two CSV files,
// calculate the speed of bipedal dinosaurs using a given formula, and print their names from fastest to slowest.
// The formula provided is:
//
// speed=(
// (LEG_LENGTH / STRIDE_LENGTH - 1) * LEG_LENGTH * 9.8
//
// The first CSV file contains statistics about various dinosaurs, including their names, leg lengths, and diets.
// The second file includes additional data such as stride lengths and stances.
async function dino() {
    const dinoList = [];
    const legLengthPath = path.join(__dirname + '../../../../../assets/dinosaur.leg_length.csv');
    const strideLengthPath = path.join(__dirname + '../../../../../assets/dinosaur.stride_length.csv');
    const dinos = new Map();
    try {
        const legLengthFile = await (0, promises_1.open)(legLengthPath);
        const strideLengthFile = await (0, promises_1.open)(strideLengthPath);
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
            dinos.set(name, { name, legLength: parseFloat(legLength) });
        }
        for await (const line of strideLengthFile.readLines()) {
            const [name, strideLength, stance] = line.split(',');
            if (name === 'NAME') {
                continue;
            }
            const dino = dinos.get(name);
            if (dino && dino.legLength) {
                dino.stance = stance;
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
            dinoList.push(maxHeap.pop().name);
        }
        return dinoList;
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
exports.dino = dino;
class MaxHeap {
    constructor() {
        this.data = [];
    }
    push(dino) {
        this.data.push(dino);
        if (this.data.length === 1) {
            return;
        }
        this.bubbleUp();
    }
    bubbleUp() {
        let currIdx = this.data.length - 1;
        let parentIdx = this.getParenIdx(currIdx);
        if (parentIdx < 0) {
            return;
        }
        while (this.data[currIdx].speed > this.data[parentIdx].speed) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = this.getParenIdx(currIdx);
            if (parentIdx < 0) {
                return;
            }
        }
    }
    pop() {
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
    heapifyDown() {
        let currIdx = 0;
        let largestChildIdx = this.getHighestChildIdx(currIdx);
        if (largestChildIdx < 0) {
            return;
        }
        while (this.data[largestChildIdx].speed > this.data[currIdx].speed) {
            this.swap(largestChildIdx, currIdx);
            currIdx = largestChildIdx;
            largestChildIdx = this.getHighestChildIdx(currIdx);
            if (largestChildIdx < 0) {
                return;
            }
        }
    }
    getParenIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }
    getLeftChild(idx) {
        const pIdx = Math.floor(idx * 2 + 1);
        if (pIdx > this.data.length - 1) {
            return -1;
        }
        return pIdx;
    }
    getRightChild(idx) {
        const pIdx = Math.floor(idx * 2 + 2);
        if (pIdx > this.data.length - 1) {
            return -1;
        }
        return pIdx;
    }
    getHighestChildIdx(idx) {
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
        if (this.data[left].speed > this.data[right].speed) {
            return left;
        }
        return right;
    }
    swap(idxOne, idxTwo) {
        [this.data[idxOne], this.data[idxTwo]] = [
            this.data[idxTwo],
            this.data[idxOne],
        ];
    }
}
//# sourceMappingURL=dinosaur.js.map