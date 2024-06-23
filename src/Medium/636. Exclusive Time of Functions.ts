function exclusiveTime(n: number, logs: string[]): number[] {
  const executionSpans = new Array(n).fill(0);
  const callStack: number[] = [];

  let prevStartTime = 0;
  logs.forEach((log) => {
    const [processNum, callType, timeStamp] = log.split(":");
    console.log("Processing ", processNum, callType, timeStamp);

    const processNumInt = parseInt(processNum);
    const processTimeStamp = parseInt(timeStamp);

    if (callType === "start") {
      if (callStack.length > 0) {
        // stack is not empty so add
        executionSpans[callStack[callStack.length - 1]] +=
          processTimeStamp - prevStartTime;
      }
      callStack.push(processNumInt);
      prevStartTime = processTimeStamp;
    } else {
      // this is an end, so one on top of call stack is done
      const endingProcess: number = callStack.pop() ?? 0;
      executionSpans[endingProcess] += processTimeStamp - prevStartTime + 1;
      prevStartTime = processTimeStamp + 1;
    }
  });

  return executionSpans;
}
