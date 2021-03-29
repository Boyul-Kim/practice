const sampleArray = [5,4,1,2,7,9,3]
let counter = 0;

for(let index = 0; index<=sampleArray.length-1; index++) {
  let indexValue = sampleArray[index]
  for(let test = index+1; test<=sampleArray.length-1; test++) {
    console.log('indexValue:', sampleArray[index], 'testValue:', sampleArray[test])
    if(indexValue > sampleArray[test]) {
      counter++
      console.log('counter addded')
    }
  }
}

console.log(counter)
