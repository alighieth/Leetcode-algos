function intToRoman(num: number): string {
  const ones: string[] = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  const tens: string[] = [
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
  ];
  const hrns: string[] = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
  ];
  const ths: string[] = ["", "M", "MM", "MMM"];

  return (
    ths[Math.floor(num / 1000)] +
    hrns[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[Math.floor(num % 10)]
  );
}
