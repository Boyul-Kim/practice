let Stack = {
  dataStore: [],
  top: 0,
  push: function(element) {
    return this.dataStore[this.top++] = element;
  },
  pop: function(element) {
    return this.dataStore[--this.top] = element;
  },
  peek: function(element) {
    return this.dataStore[this.top-1]
  }
}
