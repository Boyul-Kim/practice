function allLongestStrings(inputArray) {
  var inputArrayMap = inputArray.map(x => x.length);
  var longestString = Math.max(...inputArrayMap);
  var maxArray = []
  for (var i = 0; i <= inputArray.length - 1; i++) {
    if (inputArray[i].length === longestString) {
      maxArray.push(inputArray[i]);
    }
  }
  return maxArray;
}
