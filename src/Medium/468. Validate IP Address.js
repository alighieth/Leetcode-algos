/**
 * @param {string} queryIP
 * @return {string}
 */

function isDigit(str) {
  const regex = /^\d+$/;
  return regex.test(str);
}

function isHexa(str) {
  const regex = /^[a-fA-F0-9]+$/;
  return regex.test(str);
}

function isIPV4(str) {
  const strSplit = str.split(".");

  if (strSplit.length !== 4) return false;

  for (const num of strSplit) {
    if (!isDigit(num)) return false;
    if (num.charAt(0) === "0" && num.length > 1) return false;

    const parsedNum = parseInt(num);
    if (parsedNum < 0 || parsedNum > 255) return false;
  }

  return true;
}

function isIPV6(str) {
  const strSplit = str.split(":");

  if (strSplit.length !== 8) return false;
  for (const num of strSplit) {
    if (num.length < 1 || num.length > 4) return false;
    if (!isHexa(num)) return false;
  }

  return true;
}

var validIPAddress = function (queryIP) {
  const isIPV4Flag = isIPV4(queryIP);
  if (isIPV4Flag) return "IPv4";

  const isIPV6Flag = isIPV6(queryIP);
  if (isIPV6Flag) return "IPv6";

  return "Neither";
};
