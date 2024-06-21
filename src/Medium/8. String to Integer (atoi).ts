function myAtoi(s: string): number {
  const max32BitInt = 2147483647; // 2^31 - 1
  const min32BitInt = -2147483648; // -2^31

  try {
    const resultNumber: number = parseInt(s);

    if (Number.isNaN(resultNumber)) return 0;
    if (max32BitInt < resultNumber) return max32BitInt;
    if (min32BitInt > resultNumber) return min32BitInt;
    return resultNumber;
  } catch (error) {
    console.log(error);
  }
  return 0;
}
