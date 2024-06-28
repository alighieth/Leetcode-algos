/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let line = [];
  let lineLength = 0;

  for (const word of words) {
    if (line.length + lineLength + word.length <= maxWidth) {
      // this means i am within max width
      line.push(word);
      lineLength += word.length;
    } else {
      // i exceeded
      res.push(line);
      lineLength = word.length;
      line = [word];
    }
  }

  if (line.length > 0) res.push(line);

  const finalRes = [];

  for (let i = 0; i < res.length - 1; i++) {
    // this is a line ["a", "line"];
    const line = res[i];

    let spaceNeeded =
      maxWidth - line.reduce((acc, curr) => acc + curr.length, 0);
    let spaceGaps = Math.max(1, line.length - 1);

    let spacesPerLine = Math.floor(spaceNeeded / spaceGaps);
    let extraSpaces = spaceNeeded % spaceGaps;

    let fullWord = "";

    for (const word of line) {
      fullWord += word;

      if (spaceGaps <= 0) continue;
      const spacesToAdd = spacesPerLine + (extraSpaces > 0 ? 1 : 0);
      fullWord += " ".repeat(spacesToAdd);

      extraSpaces--;
      spaceGaps--;
    }

    finalRes.push(fullWord);
  }
  let lastLine = res[res.length - 1].join(" ");
  lastLine += " ".repeat(maxWidth - lastLine.length);
  finalRes.push(lastLine);

  return finalRes;
};
