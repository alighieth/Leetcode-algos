function simplifyPath(path: string): string {
  const resultCommand = new Array<string>();
  resultCommand.push("/");

  const splittedArr = path.split("/").filter((path) => !!path);
  console.log(splittedArr);

  for (let index = 0; index < splittedArr.length; index++) {
    const element = splittedArr[index];

    if (!element || element === ".") continue;
    if (element === "..") resultCommand.pop();
    else resultCommand.push(element);
  }

  let result = resultCommand.join("/");
  if (result.charAt(0) !== "/") result = "/" + result;
  return result;
}
