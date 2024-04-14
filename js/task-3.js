function checkForSpam(message) {
  const blackWord1 = 'spam';
  const blackWord2 = 'sale';
  const includesBanWord1 = message.toLowerCase().includes(blackWord1);
  const includesBanWord2 = message.toLowerCase().includes(blackWord2);
  const includesBanWord = includesBanWord1 || includesBanWord2;

  if (includesBanWord) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
