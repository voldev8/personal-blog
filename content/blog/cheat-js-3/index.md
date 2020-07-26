---
title: Cheat-> Js-Part 3
date: "2015-05-05"
description: "Array methods, Closures"
---

## Table of Contents

- [Array Methods](#array-methods)
  - [Filter](#filter)
  - [ForEach](#foreach)
  - [Map](#map)
  - [Reduce](#reduce)
  - [Some](#some)
  - [Every](#every)
- [Function Methods](#function-methods)
  - [Call](#call)
  - [Apply](#apply)
  - [Bind](#bind)

## Array Methods

### Filter

```javascript
function filter(array, callback) {
  newArr = []
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i])
    }
  }
  return newArr
}

arr.filter((value, index, array) => value > 2)
```

### forEach

```javascript
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

arr.forEach((val, index, array) => console.log(val, index, array))
```

### map

```javascript
function map(arr, callback) {
  var newArr = []
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(arr[i], i, arr))
  }
  return newArr
}

arr.map((value, index, array) => value * 2)
```

### reduce

```javascript
function reduce(callback, initialState) {
  const hasInitialState = arguments.length > 1
  let result = initialState
  for (let i = 0; i < this.length; i++) {
    if (i === 0 && !hasInitialState) {
      result = this[i]
    } else {
      result = callback(result, this[i], i, this)
    }
  }
  return result
}

arr.reduce(
  (accumulator, nextValue, index, array) => accumulator + nextValue,
  optionalSecondParameter
)
```

### some

```javascript
function some(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true
    }
  }
  return false
}

arr.some((value, index, array) => value < 2)
```

### every

```javascript
function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false
    }
  }
  return true
}

arr.every((value, index, array) => value < 2)
```

## Function Methods

### call

```javascript
var person = {
  firstName: "Jason",
  sayHi: function() {
    return "Hi " + this.firstName
  },
  determineContext: function() {
    return this === person
  },
  dog: {
    sayHi: function() {
      return "Hi " + this.firstName
    },
    determineContext: function() {
      return this === person //false
    },
  },
}
person.dog.sayHi.call(person)
person.dog.determineContext.call(person) //now it is true

var damon = {
  firstName: "Damon",
}
person.sayHi.call(damon)

function sayHello() {
  return "Hello " + this.firstName
}
console.log(sayHello(damon)) //Hello undefined
console.log(sayHello.call(damon)) // Hello Damon

var divs = document.getElementByTagName("div")
divs.filter(val => val) // undefined
var divsArray = [].slice.call(divs)
divsArray.filter(function(val) {
  return val.innerText === "Hello"
}) //now you get a result
```

### apply

```javascript
function sayHi() {
  return "Hi " + this.firstName
}
var damon = {
  firstName: "Damon",
}
var jason = {
  firstName: "Jason",
}
console.log(sayHi.call(damon))
console.log(sayHi.apply(jason)) //seems similar
//but with parameters
function addNumbers(a, b, c, d) {
  return this.firstName + " just calculated " + (a + b + c + d)
}
console.log(addNumbers.call(damon, 1, 2, 3, 4))
console.log(addNumbers.apply(jason, [1, 2, 3, 4])) //takes an array as a parameter

var nums = [5, 7, 1, 4, 2]
console.log(Math.max(nums)) //NaN because it doesn't take any arrays
console.log(Math.max.apply(this, nums))
function sumValues(a, b, c) {
  return a + b + c
}
var values = [1, 2, 3]
console.log(sumValues(values)) // "1,2,3undefinedundefined"
console.log(sumValues.apply(this, values)) // you get the result
```

### bind

```javascript
//bind
function addNumbers(a, b, c, d) {
  return this.firstName + " just calculated " + (a + b + c + d)
}
var damon = {
  firstName: "Damon",
}
//bind returns a new function with 'this' bound already
var damonCalc = addNumbers.bind(damon, 1, 2, 3, 4)
console.log(damonCalc())
var damonCalc2 = addNumbers.bind(damon, 1, 2)
console.log(damonCalc2()) //NaN
console.log(damonCalc2(3, 4)) //gives you the result it continues where bind left of

var jason = {
  firstName: "Jason",
  sayHi: function() {
    setTimeout(
      function() {
        //this refers to window because setTimeout is window function
        console.log("Hi " + this.firstName)
      }.bind(this),
      1000
    ) //this is how we fix it
  },
}
jason.sayHi()
```
