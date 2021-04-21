function sortByHeight(a) {
  var people = [];
  for (var i = 0; i <= a.length - 1; i++) {
    if (a[i] !== -1) {
      var temp = a[i];
      people.push(temp);
      a[i] = 'x';
    }
  }
  for (var x = 0; x <= a.length - 1; x++) {
    if (a[x] === 'x') {
      a[x] = Math.min(...people);
      var index = people.indexOf(Math.min(...people));
      people.splice(index, 1);
    }
  }
  return a;
}
