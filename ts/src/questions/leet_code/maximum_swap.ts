// TODO: Make this optimized
export function maximumSwap(num: number): number {
  const splitNum: number[] = num
    .toString()
    .split('')
    .map(x => parseInt(x));

  if (!num) {
    return 0;
  }

  if (splitNum.length === 1) {
    return num;
  }

  for (let i = 0; i < splitNum.length - 1; i++) {
    const maxPossibleRightNum = Math.max(...splitNum.slice(i + 1));
    if (maxPossibleRightNum > splitNum[i]) {
      for (let x = splitNum.length - 1; x > i; x--) {
        if (splitNum[x] === maxPossibleRightNum) {
          [splitNum[x], splitNum[i]] = [splitNum[i], splitNum[x]];
          return parseInt(splitNum.join(''));
        }
      }
    }
  }

  return num;
}
