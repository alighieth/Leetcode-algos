function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  const tempList = [intervals[0]];

  intervals.forEach((element) => {
    if (tempList[tempList.length - 1][1] < element[0]) tempList.push(element);
    // [1,2] [3,4]
    // [1,2] [2,4]
    else {
      tempList[tempList.length - 1][1] = Math.max(
        element[1],
        tempList[tempList.length - 1][1]
      );
    }
  });
  return tempList;
}
