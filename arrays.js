var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = [1]
var element = "foo"
function addElementToBeginningOfArray(array,element){
  var newArray = ([element, ...array])
  return newArray
}


function destructivelyAddElementToBeginningOfArray() {
  var array = []
  var element = ""
  return array.unshift(element)
}

function addElementToEndOfArray(array,element){
  return `${[...array, element]}`
}

function destructivelyAddElementToEndOfArray(array,element) {
  const alter = array.push(element)
  console.log (array)
}

function accessElememtInArray(array,index) {
  const access = array[index]
  console.log (access)
}

function destructivelyRemoveElementFromBeginning(array) {
  const firstElement = array.shift()
  console.log (array)
}

function removeElementFromBeginningOfArray(array,index) {
  const alter = array.slice(index)
  console.log (alter)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  const lastElement = array.push()
  console.log (array)
}

function removeElementFromEndOfArray(array) {
  const alter = array.slice(0, array.length - 1)
  console.log(alter)
}

