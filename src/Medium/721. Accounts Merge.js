/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
class UnionFind {
  parent;
  size;

  constructor(size) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.size = new Array(size).fill(1);
  }

  find(index) {
    if (index === this.parent[index]) {
      return index;
    } else {
      return this.find(this.parent[index]);
    }
  }

  union(i1, i2) {
    const f1 = this.find(i1);
    const f2 = this.find(i2);

    if (f1 === f2) return false;

    if (this.size[f1] > this.size[f2]) {
      this.parent[f2] = f1;
      this.size[f1] += this.size[f2];
    } else {
      this.parent[f1] = f2;
      this.size[f2] += this.size[f1];
    }

    return true;
  }
}

var accountsMerge = function (accounts) {
  const emailMap = new Map();
  const unionFind = new UnionFind(accounts.length);

  for (let index = 0; index < accounts.length; index++) {
    const account = accounts[index];

    for (let jIndex = 1; jIndex < account.length; jIndex++) {
      const accountEmail = account[jIndex];

      if (emailMap.has(accountEmail)) {
        const unionAccount = emailMap.get(accountEmail);
        unionFind.union(index, unionAccount);
      } else {
        emailMap.set(accountEmail, index);
      }
    }
  }

  const emailToAccount = new Map();
  for (const [email, accountIndex] of emailMap.entries()) {
    const parent = unionFind.find(accountIndex);

    const parentEmails = emailToAccount.get(parent) ?? [];
    parentEmails.push(email);
    emailToAccount.set(parent, parentEmails);
  }

  const res = [];
  for (const [accountIndex, emails] of emailToAccount.entries()) {
    const accountName = accounts[accountIndex][0];
    const sortedEmails = emails.sort();
    res.push([accountName, ...sortedEmails]);
  }

  return res;
};
