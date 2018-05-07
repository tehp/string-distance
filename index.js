function costOfSubstitution(a, b) {
  return a == b ? 0 : 1;
}

module.exports = {
  levenshtein: function(a, b) {

    if (!a.length) {
      return b.length;
    } else if (!b.length) {
      return a.length;
    }

    return Math.min(
      levenshtein(a.substr(1), b) + 1,
      levenshtein(b.substr(1), a) + 1,
      levenshtein(a.substr(1), b.substr(1)) + (a[0] !== b[0] ? 1 : 0)
    ) + 1;

  }
}