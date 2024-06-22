function customSortString(order: string, s: string): string {
  if (s.length <= 1) return s;

  const orderMap = new Map<string, string[]>();
  const orderSet = new Set<string>();
  const dummiesLetters = new Array<string>();

  order.split("").forEach((element) => orderSet.add(element));

  s.split("").forEach((element) => {
    if (orderSet.has(element)) {
      const tempArr = orderMap.get(element) ?? [];
      tempArr.push(element);
      orderMap.set(element, tempArr);
    } else {
      dummiesLetters.push(element);
    }
  });

  const finalArr = new Array<string>();
  orderSet.forEach((element) => {
    const tempArr = orderMap.get(element) ?? [];
    finalArr.push(tempArr.join(""));
  });

  finalArr.push(dummiesLetters.join(""));

  return finalArr.join("");
}
