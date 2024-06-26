var groupStrings = function (strings) {
  const groups = {};

  for (const str of strings) {
    const seq = [];

    for (let i = 1; i < str.length; i++) {
      let jump = str.charCodeAt(i) - str.charCodeAt(i - 1);
      if (jump < 0) jump += 26;
      seq.push(jump);
    }

    const i = seq.join();
    groups[i] ??= [];
    groups[i].push(str);
  }

  return Object.values(groups);
};

// to use with Map, replace with:
// const groups = new Map();
// ...
// if (!groups.get(key)) groups.set(key, []);
// groups.get(key).push(str);
// ....
// return [...groups.values()];
