function generateParenthesis(n: number): string[] {
  const resultArr = new Array<string>();

  const maxOpenBracket = n - 1;
  const maxCloseBracket = n;
  recHelper("(", maxOpenBracket, maxCloseBracket, resultArr);
  return resultArr;
}

function recHelper(
  str: string,
  numOpenBracket: number,
  numCloseBracket: number,
  resultArr: string[]
): void {
  console.log(numOpenBracket, numCloseBracket, str);
  if (numOpenBracket <= 0 && numCloseBracket <= 0) {
    // CHECK IF VALID
    if (isValidParentheses(str)) {
      resultArr.push(str);
    }
    return;
  }

  if (numCloseBracket > 0 && numCloseBracket > numOpenBracket) {
    recHelper(str + ")", numOpenBracket, numCloseBracket - 1, resultArr);
  }

  if (numOpenBracket > 0) {
    recHelper(str + "(", numOpenBracket - 1, numCloseBracket, resultArr);
  }
}

function isValidParentheses(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
