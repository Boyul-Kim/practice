function commonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  var count = 0

  for (var i = 0; i <= s1.length - 1; i++) {
    for (var x = 0; x <= s2.length - 1; x++) {
      if (s1[i] === s2[x]) {
        console.log('before:', s1, s2);
        count++;
        s1.splice(i, 1);
        s2.splice(x, 1);
        console.log('after', s1, s2);
      }
    }
  }

  for (var i = 0; i <= s1.length - 1; i++) {
    if (s2.includes(s1[i])) {
      count++;
      // s1.splice((s1.indexOf(s1[i])), 1);
      // s2.splice((s2.indexOf(s1[i])), 1);
    }
  }
  return count;
}
