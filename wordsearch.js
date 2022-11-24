const wordSearch = (letters, word) => {
  let x = 0;
  const verticalJoin = letters.map(item => item[x]).join('');
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  for (item of verticalJoin) {
      x++;
      if (!item.includes(word)) return false
}
}
module.exports = wordSearch;