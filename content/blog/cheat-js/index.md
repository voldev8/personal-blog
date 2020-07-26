---
title: Cheat-> Js
date: "2015-05-03"
description: "Basics, How js works, DOM, Objects and functions "
---

## Table of Contents

- [Basics](#basics)

  - [Hello World!](#hello-world!)
  - [Comment](#comment)
  - [Variables](#variables)
  - [Operators](#operators)
  - [If/else Statements](#if/else-statements)
  - [Ternary Operator](#ternary-operator)
  - [Switch Statement](#switch-statement)
  - [Functions](#functions)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Loops](#loops)

- [How Js Works](#how-js-works)

  - [Hoisting](#hoisting)
  - [Scoping](#scoping)
  - [this](#this)

- [DOM](#dom)

- [Objects and Functions](#objects-and-functions)

  - [Function Constructor](#function-constructor)
  - [Inheritance](#inheritance)
  - [Object.create](#object.create)
  - [Primitives vs Objects](#primitives-vs-objects)
  - [Passing functions as arguments](#passing-functions-as-arguments)
  - [Function Returning Another Function](#Function-returning-another-function)
  - [IIFE](#iife)
  - [Closures](#closures)
  - [Bind,Call,Apply](#bind,call,apply)

## Basics

### Hello world!

```javascript
//Javascript hello world
;(function() {
  "use strict"
  function greetMe(name) {
    console.log("Hello " + name + ".")
  }
  greetMe("Damon")
})()
```

### Comment

```javascript
//Comment in a line
/* comments in
a few lines */
```

### Variables

```javascript
if (true) {
  var a = 2
}
console.log(a) //2

if (true) {
  let b = 3
}
console.log(b) // b is not defined

const PI = 3.14 //const variables can not be changed
var a = 3 // var can be changed
console.log(a) //3
```

### Operators

```javascript
var now = 2018
var yearJohn = 1989
var fullAge = 18
var isFullAge = now - yearJohn >= fullAge
console.log(isFullAge) //true
```

### If/else Statements

```javascript
var ifElse = true
if (ifElse) {
  console.log("That is true")
} else {
  console.log("That is not true")
}
```

### Ternary Operator

```javascript
var ternaryFirstName = "John"
var ternaryAge = 22

ternaryAge >= 18
  ? console.log(ternaryFirstName + " can drink.")
  : console.log(ternaryFirstName + " not allowed to drink.")

var drink = ternaryAge >= 18 ? "Beer" : "juice"
console.log(drink) //Beer
```

### Switch Statement

```javascript
var job = "teacher"
switch (job) {
  case "teacher":
    console.log(ternaryFirstName + " teaches.")
    break
  case "driver":
    console.log(ternaryFirstName + " is a driver.")
    break
  default:
    console.log(ternaryFirstName + " does something else.")
}
```

### Functions

```javascript
function calculateAge(birthYear) {
  return 2018 - birthYear
}
var ageJohn = calculateAge(1980)
var ageDan = calculateAge(1976)
console.log(ageJohn, ageDan) //38 42

//function declaration
function yearsUntilRetire(year, firstName) {
  var age = calculateAge(year)
  var retirement = 65 - age
  console.log(firstName + " retires in " + retirement + " years.")
}

yearsUntilRetire(1990, "John")

//FUNCTION STATEMENTS and EXPRESSIONS
//function expression (they do not hoist)
var whichTeam = function(team, name) {
  switch (team) {
    case "Barcelona":
      return name + " plays for Barca."
    case "Real Madrid":
      return name + " plays for R.Madrid."
    default:
      return "Does not play for both teams."
  }
}
console.log(whichTeam("Barcelona", "Messi"))
```

### Arrays

```javascript
var coffees = ["Dark Roast", "Colombian", "Turkish"]
console.log(coffees[1]) //Colombian

var johnArray = ["John", "Smith", 1980, "player", true]
johnArray.push("yellow")
johnArray.unshift("Mr.")
console.log(johnArray)
johnArray.pop() //removes the last
johnArray.shift() //removes the first
console.log(johnArray)

var isPlayer =
  johnArray.indexOf("player") === -1
    ? johnArray[0] + " is not a player."
    : johnArray[0] + " is a player."
console.log(isPlayer)
```

### Objects

```javascript
var car = {
  myCar: "Subaru",
  milage: 112012,
  color: "white",
}
console.log("I have a " + car.color + " " + car.myCar + ".")

var carNew = new Object()
carNew.model = "Hyundai"
carNew["milage"] = 12752

//Objects Methods
var hank = {
  firstName: "Hank",
  lastName: "Dang",
  birthYear: 1980,
  calcAge: function() {
    this.age = 2018 - this.birthYear
  },
}
```

### Loops

```javascript
//for loop
console.log("***for loop***")
for (var i = 0; i < johnArray.length; i++) {
  console.log(johnArray[i])
}

//while loop
console.log("***while loop***")
var i = 0
while (i < johnArray.length) {
  console.log(johnArray[i])
  i++
}

//continue and break statements
console.log("***continue***")
for (var i = 0; i < johnArray.length; i++) {
  //if not string skip
  if (typeof johnArray[i] !== "string") continue
  console.log(johnArray[i])
}

console.log("***break***")
for (var i = 0; i < johnArray.length; i++) {
  //if not string stop
  if (typeof johnArray[i] !== "string") break
  console.log(johnArray[i])
}
```

## How Js Works

### Hoisting

```javascript
//Declaration
calculateAge(1990) //hoisting
function calculateAge(year) {
  console.log(2018 - year)
}

//Expression
//hoisting doesn't work with expressions
retirement(1980) //Uncaught TypeError: retirement is not a function
var retirement = function(year) {
  console.log(65 - (2018 - year))
}

//Variables
console.log(age) //undefined Js knows it is declared but not defined yet
var age = 36
console.log(age) //36

function foo() {
  console.log(age) //undefined --> because age is changed after this
  var age = 65
  console.log(age) //age is 65 inside the function
}
foo()
console.log(age) // global age is still 36
```

### Scoping

```javascript
// First scoping example
var a = "Hello!"
first()
function first() {
  var b = "Hi!"
  second()
  function second() {
    var c = "Hey!"
    console.log(a + b + c) //Hello!Hi!Hey!
  }
}

// Example to show the difference between execution stack and scope chain
var a1 = "Hello!"
first1()
function first1() {
  var b1 = "Hi!"
  second1()
  function second1() {
    var c1 = "Hey!"
    third1()
  }
}
function third1() {
  var d1 = "John"
  console.log(a1 + b1 + c1 + d1) //Uncaught ReferenceError: b1 is not defined
  // it can not access to b1, c1 because they are inside another func
}
```

### this

```javascript
carAge(2012)
function carAge(year) {
  console.log(2018 - year)
  console.log(this) //global object (window)
}

var damon = {
  name: "Damon",
  yearOfStart: 2003,
  yearsOfWork: function() {
    //method
    console.log(this) //damon object
    console.log(2018 - this.yearOfStart)

    function innerFunction() {
      //not a method it is a regular function
      console.log(this) //back to being window
    }
  },
}
damon.yearsOfWork() // now this refers to the damon object

var mike = {
  name: "Mike",
  yearOfStart: 2010,
}

mike.yearsOfWork = damon.yearsOfWork //borrows the method
mike.yearsOfWork()
```

## DOM

```javascript
eventTarget.addEventListener("event", eventHandlerFunction)
eventTarget.removeEventListener("event", eventHandlerFunction)

document.querySelector(".class").addEventListener("click", function() {
  document.getElementById("dice1").style.display = "block"
  document.getElementById("dice1").src = "dice-" + dice1 + ".png"
  document.querySelector(".player-0-panel").classList.remove("active")
  document.querySelector(".player-0-panel").classList.remove("active")
  document.querySelector(".player-0-panel").classList.toggle("active")
  do_sth()
})
```

## Objects and Functions

### Function Constructor

```javascript
var Person = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}
```

### Inheritance

```javascript
Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth)
}
Person.prototype.lastName = "Smith"
var damon = new Person("Damon", 1980, "driver")
var henry = new Person("Henry", 1974, "player")
damon.calculateAge() //38
henry.calculateAge() //44
console.log(damon.lastName + " " + henry.lastName) //Smith Smith
```

### Object.create

```javascript
var personProto = {
  calculateAge1: function() {
    console.log(2018 - this.yearOfBirth) //27
  },
}

var john = Object.create(personProto)
john.name = "John"
john.yearOfBirth = 1992
john.job = "teacher"

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1978 },
  job: { value: "painter" },
})
```

### Primitives vs Objects

```javascript
var age = 27
var obj1 = {
  age: 26,
  city: "Berlin",
}
function change(a, b) {
  a = 30
  b.city = "San Francisco"
}

change(age, obj1)
console.log(age) //27
console.log(obj1.city) //San Francisco
```

### Passing functions as arguments

```javascript
var years = [1970, 1960, 1893, 1920]
function arrayCalc(arr, fn) {
  var arrRes = []
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

function calculateAge2(el) {
  return 2018 - el
}
function isFullAge(el) {
  return el >= 50
}
function maxHeartBeat(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el)
  } else {
    return -1
  }
}
var ages = arrayCalc(years, calculateAge2)
var fullAges = arrayCalc(ages, isFullAge)
var heartBeat = arrayCalc(ages, maxHeartBeat)
console.log(ages) //[48, 58, 125, 98]
console.log(fullAges) //[false, true, true, true]
console.log(heartBeat) // [175, 168, -1, -1]
```

### Function Returning Another Function

```javascript
function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?")
    }
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "!")
    }
  } else {
    return function(name) {
      console.log("What do you do " + name + "?")
    }
  }
}

var teacherQuestion = interviewQuestions("teacher")
var designerQuestion = interviewQuestions("designer")
teacherQuestion("Damon") //What subject do you teach, Damon!
designerQuestion("Jane") //Jane, can you please explain what UX design is?
interviewQuestions("teacher")("John") //What subject do you teach, John!
```

### IIFE

```javascript
// Immediately Invoked Function Expressions
var x = 2
;(function(x) {
  var score = Math.random() * 10
  console.log(score) //4.122908056875344
  console.log(x) // 2
  console.log(score - x >= 5) // false
})(x)
var x = 3
```

### Closures

```javascript
function retirement(retirementAge) {
  var a = " years left until retirement"
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth
    console.log(retirementAge - age + a)
  }
}

var retirementUS = retirement(65)
var retirementGermany = retirement(66)
var retirementIceland = retirement(67)

retirementUS(1990) //37 years left until retirement
retirementIceland(1990) //39 years left until retirement
retirement(1990)(65) //37 years left until retirement

function interviewQuestions(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?")
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?")
    } else {
      console.log("What do you do " + name + "?")
    }
  }
}
interviewQuestions("teacher")("John") //'What subject do you teach, John?'
```

### Bind, Call, Apply

```javascript
var bca = {
  name: "Damon",
  age: 23,
  job: "Driver",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " ladies and gentlemen! My name is " +
          this.name +
          ".I'm a " +
          this.job +
          ".I'm " +
          this.age +
          " years old."
      )
    } else if (style === "friendly") {
      console.log(
        "Hey Good " +
          timeOfDay +
          ".What's up? I'm " +
          this.name +
          " I'm a " +
          this.job +
          ".I'm " +
          this.age +
          " years old."
      )
    } else {
      console.log("Please pick a style.")
    }
  },
}
var bca2 = {
  name: "Mary",
  age: 54,
  job: "Creator",
}
bca.presentation("formal", "morning") //Good morning ladies and gentlemen! My name is Damon.I'm a Driver.I'm 23 years old.

//call
bca.presentation.call(bca2, "friendly", "afternoon") //Hey Good afternoon.What's up? I'm Mary I'm a Creator.I'm 54 years old.
//changed this method from bca to bca2 ==> Method borrowing

//apply
bca.presentation.apply(bcaCall, ["friendly", "Morning"]) //with array it doesn't fit in our example

//bind
var bcaFriendly = bca.presentation.bind(bca, "friendly")
bcaFriendly("morning") //Hey Good morning.What's up? I'm Damon I'm a Driver.I'm 23 years old.
bcaFriendly("night") //Hey Good night.What's up? I'm Damon I'm a Driver.I'm 23 years old.
//similar to call but it doesn't immediately call the function it creates another one with preset arguments
```
