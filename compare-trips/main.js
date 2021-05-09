function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let index = 0; index <= a.length - 1; index++) {
    if (a[index] > b[index]) {
      alice++
    } else if (a[index] < b[index]) {
      bob++;
    }
  }
  return [alice, bob];

}
