---
title: Cheat-> Js-Part 2
date: "2015-05-04"
description: "ES6, Async"
---

## Table of Contents

- [ES6](#es6)

  - [let and const](#let-and-const)
  - [Blocks and IIFEs](#blocks-and-iifes)
  - [Strings](#strings)
  - [Arrow Functions](#arrow-functions)
  - [Arrow Functions 2](#arrow-functions-2)
  - [Destructuring](#destructuring)
  - [Arrays](#arrays)
  - [Spread Operator](#spread-operator)
  - [Rest Parameters](#rest-parameters)
  - [Default Parameters](#default-parameters)
  - [Maps](#maps)
  - [Classes](#subclasses)

- [Async](#async)
  - [ajax](#ajax)
  - [Promises](#promises)

## ES6

### let and const

```javascript
//ES5
var name5 = "Jane Smith"
var age5 = 23
name5 = "Jane Miller"
console.log(name5) //Jane Miller

//ES6
/* constants can not be changed, will get an error
 can mutate it though if it is object (with .push() for ex) */
const name6 = "Jane Smith"
let age6 = 23
name6 = "Jane Miller"
console.log(name6) //Uncaught TypeError: invalid assignment to const 'name6'

//ES5
function driverLicense5(passedTest) {
  if (passedTest) {
    var firstname = "John"
    var yearOfBirth = 1990
  }
  console.log(
    firstname + " whom was born in " + yearOfBirth + " passed the test!"
  )
}
driverLicense5(true) //John whom was born in 1990 passed the test!

//ES6
function driverLicense6(passedTest) {
  if (passedTest) {
    //let and const only accessible in block
    let firstname = "John"
    const yearOfBirth = 1990
  }
  console.log(
    firstname + " whom was born in " + yearOfBirth + " passed the test!"
  )
}
driverLicense6(true) // Uncaught ReferenceError: firstname is not defined

//ES5
var i5 = 5
for (var i5 = 2; i5 > 0; i5--) {
  console.log(i5)
}
console.log(i5) // 0
//ES6
let i6 = 6
for (let i6 = 2; i6 > 0; i6--) {
  console.log(i6)
}
console.log(i6) // 6
```

### Blocks and IIFEs

```javascript
//ES5
;(function() {
  var c = 3
})
console.log(c) //c is not defined
//ES6
{
  const a = 1
  let b = 2
  var c = 3
}
console.log(a) // not accessible
console.log(c) // accessible
```

### Strings

```javascript
let firstName = "John"
let lastName = "Smith"
const yearOfBirth = 1990

function calcAge() {
  return 2017 - yearOfBirth
}

//ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    " and he is " +
    calcAge(yearOfBirth) +
    "."
)
//ES6
console.log(
  `This is ${firstName} ${lastName} and he is ${calcAge(yearOfBirth)}.`
)
const n = `${firstName} ${lastName}`
console.log(n.startsWith("J")) //true
console.log(n.endsWith("h")) //true
console.log(n.endsWith("n")) //false
console.log(n.includes("oh")) //true
console.log(`${firstName} `.repeat(3)) //John John John
```

### Arrow Functions

```javascript
const years = [1990, 1965, 1982, 1937]

//ES5
var ages5 = years.map(function(e) {
  return 2017 - e
})
console.log(ages5) //[27, 52, 35, 80]

//ES6
let ages6 = years.map(e => 2017 - e) // no need for return in one-line functions
console.log(ages6) //[27, 52, 35, 80]

ages6 = years.map((e, index) => `Age element ${index + 1}: ${2017 - e}.`)
console.log(ages6)

ages6 = years.map((e, index) => {
  const now = new Date().getFullYear()
  const age = now - e
  return `Age element ${index + 1}: ${age}.`
})
console.log(ages6) //[ "Age element 1: 27.", "Age element 2: 52.", "Age element 3: 35.", "Age element 4: 80." ]
```

### Arrow Functions 2

```javascript
//ES5
var box5 = {
  color: "green",
  position: "1",
  clickMe: function() {
    var self = this
    document.querySelector(".green").addEventListener("click", function() {
      //this points to window object not to box5 thats why we create self variable
      var str =
        "This is box number " + self.position + " and it is " + self.color
      alert(str)
    })
  },
}
box5.clickMe()
//ES6
const box6 = {
  color: "green",
  position: "1",
  clickMe: function() {
    // if you switch this to es6 it is not gonna work '() =>'
    document.querySelector(".green").addEventListener("click", () => {
      // es6 you don't need to create a self variable
      var str =
        "This is box number " + this.position + " and it is " + this.color
      alert(str)
    })
  },
}
box6.clickMe()
//arrow functions should never be used as methods

//function constructor
function Person(name) {
  this.name = name
}
//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(e) {
      return this.name + " is friends with " + e
    }.bind(this)
  ) //if you don't bind it this takes window --bind creates a copy
  console.log(arr)
}
var friends = ["Bob", "Jane", "Mark"]
new Person("John").myFriends5(friends)
//ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(e => `${this.name} is friends with  ${e}`)
  console.log(arr)
}
new Person("Mike").myFriends6(friends)
```

### Destructuring

```javascript
//ES5
var john = ["John", 26]
var name = john[0]
var age = john[1]
//ES6
const [name1, age1] = ["John", 26]
console.log(name1) // John
console.log(age1) // 26

const obj = {
  firstName1: "John",
  lastName1: "Smith",
}
const { firstName1, lastName1 } = obj
console.log(firstName1) // John
console.log(lastName1) // Smith

const { firstName1: a, lastName1: b } = obj
console.log(a) // John
console.log(b) // Smith

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year
  return [age, 65 - age]
}

const [age, retirement] = calcAgeRetirement(1990)
console.log(age) //age
console.log(retirement) // (65 - age)
```

### Arrays

```javascript
const boxes = document.querySelectorAll(".box")

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes)
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "red"
})
//ES6
const boxesArr6 = Array.from(boxes)
boxesArr6.forEach(cur => (cur.style.backgroundColor = "red"))

//ES5
for (var jbox = 0; jbox < boxesArr5.length; jbox++) {
  if (boxesArr5[jbox].className === " box blue") {
    continue
  }
  boxesArr5[jbox].textContent = "I am changed to blue"
}
//ES6
for (const current of boxesArr6) {
  if (current.className.includes("blue")) {
    continue
  }
  current.textContent = "I am changed to red"
}

var ages = [12, 17, 8, 21, 14, 11]
var full5 = ages.map(function(cur) {
  return cur >= 18
})
console.log(full5) // [false, false, false, true, false, false]

//ES5
console.log(full5.indexOf(true)) // 3
console.log(ages[full5.indexOf(true)]) // 21
//ES6
console.log(ages.findIndex(cur => cur >= 18)) // 3
console.log(ages.find(cur => cur >= 18)) // 21
```

### Spread Operator

```javascript
//used in function
function addFourAges(a, b, c, d) {
  return a + b + c + d
}
var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1) //81

//ES5
//if we want to use an array we need apply in es5
var ages = [18, 30, 12, 21]
var sum2 = addFourAges.apply(null, ages)
console.log(sum2) //81
//ES6
//but in es6 we use spread (...)
const sum3 = addFourAges(...ages)
console.log(sum3) //81

const familySmith = ["John", "Jane", "Mike"]
const familyDoe = ["Nick", "Mary"]
//ES5
var bigFamily = familySmith.concat("Lana").concat(familyDoe)
//ES6
const bigFamily = [...familySmith, "Lana", ...familyDoe]

console.log(bigFamily) //[ "John", "Jane", "Mike", "Lana", "Nick", "Mary" ]

const h = document.querySelector("h1")
const boxes1 = document.querySelectorAll(".box") //node-list
const all = [h, ...boxes1]
Array.from(all).forEach(cur => (cur.style.color = "orange"))
console.log("<---->")
```

### Rest Parameters

```javascript
/* if we don't know how many arguments are there gonna be
used in function declaration */

//ES5
function isFullAge5() {
  console.log(arguments) //similar to this variable
  //makes arguments an array
  var argsArr = Array.prototype.slice.call(arguments)
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18)
  })
}
isFullAge5(1990, 1999, 1965)
//ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18))
}
isFullAge6(1990, 1999, 1965)

//ES5
function isFullAge51(limit) {
  //starts cutting from position one
  var argsArr1 = Array.prototype.slice.call(arguments, 1)
  argsArr1.forEach(function(cur) {
    console.log(2016 - cur >= limit)
  })
}
isFullAge51(16, 1990, 1999, 1965)
//ES6
function isFullAge61(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit))
}
isFullAge61(16, 1990, 1999, 1965)
```

### Default Parameters

```javascript
//ES5
//function constructor
function Smith5(firstName, yearOfBirth, lastName, nationality) {
  //default lastName and nationality if not specified
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName)
  nationality === undefined
    ? (nationality = "American")
    : (nationality = nationality)
  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}
//ES6
function Smith6(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "American"
) {
  //default lastName and nationality if not specified
  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}
var john = new Smith6("John", 1990)
console.log(john)
//{ firstName: "John", lastName: "Smith", yearOfBirth: 1990, nationality: "American" }

//last name and nationality changed
var emily = new Smith6("Emily", 1980, "Diaz", "Spanish")
console.log(emily)
// { firstName: "Emily", lastName: "Diaz", yearOfBirth: 1980, nationality: "Spanish" }
```

### Maps

```javascript
//new key value data structure
const question = new Map()
//in order to add data we use set method
question.set("question", "What is the capitol?")
question.set(1, "Brussels")
question.set(2, "Washington")
question.set(3, "Ankara")
question.set(4, "Caracas")
//correct answer
question.set("correct", 2)
//if the answer is correct
question.set(true, "Correct")
// if it is wrong
question.set(false, "Wrong try again")
//get
console.log(question.get("question")) //What is the capitol?
//size of map
console.log(question.size) // 8

if (question.has(4)) {
  //checks if it has number 4
  question.delete(4) //4th answer is gone
}
//empty the map
question.clear()

// question.forEach((value, key) => console.log(`this is ${key}, and it's set to ${value}`));
for (let [key, value] of question.entries()) {
  //same as forEach method
  if (typeof key === "number") {
    //if key is number then print
    console.log(`Answer ${key}: ${value}`)
  }
}
//convert to number
const ans = parseInt(prompt("Write the correct answer for capitol"))
console.log(question.get(ans === question.get("correct")))
```

### Classes

```javascript
//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}
Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth
  console.log(age)
}
var mioke5 = new Person5("Mioke", 1970, "engineer")
//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  //no need for ; or ,
  calculateAge() {
    //no need for prototype
    var age = new Date().getFullYear - this.yearOfBirth
    console.log(age)
  }
  static greeting() {
    //attached, not inherited
    console.log("Hey there I am Person6")
  }
}

const mioke6 = new Person6("Mioke", 1970, "engineer")
Person6.greeting()
//Static methods won't work at instances
mioke6.greeting()
```

### Subclasses

```javascript
//ES5
//person5 superclass
var Person5s = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}
Person5s.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}
//subclass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5s.call(this, name, yearOfBirth, job) //
  this.olympicGames = olympicGames
  this.medals = medals
}
Athlete5.prototype = Object.create(Person5s.prototype)
Athlete5.prototype.wonMedal = function() {
  this.medals++
  console.log(this.medals)
}
var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10)
johnAthlete5.calculateAge() // 30
johnAthlete5.wonMedal() // 11

//ES6
class Person6s {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
}
//subclass
class Athlete6 extends Person6s {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  }
  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10)
johnAthlete6.calculateAge() // 30
johnAthlete6.wonMedal() // 11
```

## Async

### Ajax

```javascript
//request and fetch (fetch is more modern)
function getWeather() {
  const url = "some_url"
  fetch(url)
    .then(result => {
      console.log(result)
      //converting json to javascript
      return result.json()
    })
    .then(data => {
      //prints the json
      console.log(data)
      const today = data.consolidated_weather[0]
      console.log(`temperatures in ${data.title} stay between
      ${today.min_temp} and ${today.max_temp}.`)
    })
    .catch(error => {
      console.log(error)
    })
}
getWeather(2487956)

//fetch with await/async
async function getWeatherAw() {
  const url = "some_url"
  //tries if there is an error
  try {
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)
    return data
  } catch (error) {
    alert(error)
  }
}
getWeatherAw()

let dataCity
getWeatherAw(someNumber).then(data => {
  dataCity = data
  console.log(dataCity)
})
```

### Promises

```javascript
//async

const second = () => {
  setTimeout(() => {
    console.log('no there is Async');
  }, 2000);   //gives two seconds delay
};
const first = () => {
  console.log('First');
  second();
  console.log('the end');
};
first();


//async with callbacks (old way)
function getRecipe() {
  setTimeout(() => {
    const recipeId = [123, 281, 234, 12];
    console.log(recipeId);

    setTimeout(id => {
      const recipe = {
        title: 'Pizza',
        publisher: 'Damon'
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout(id => {
        const recipe2 = {
          title: 'Pasta',
          publisher: 'John'
        };
        console.log(`${id}: ${recipe2.title}, publisher: ${recipe2.publisher}`);
      }, 1500, recipeId[2]);
    }, 1000, recipeId[1]); //it ll be 2500 ms; third argument is parameter for the function
  }, 1500);
};
getRecipe();


//promises (es6)

const getIds = new Promise((resolve, reject) => {
  //setTimeout can not be failed
    setTimeout(()=>{
      resolve([123, 281, 234, 12]);
    }, 1500);
});

const getRecipe = recId => {
  return new Promise((resolve, reject) => {
    setTimeout(id => {
      const recipe = {
        title: 'Pasta',
        publisher: 'Damon'
      };
      resolve(`${id}: ${recipe.title}`);
    }, 1500, recId)
  });
};
const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Pizza',
        publisher: 'John'
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);
  });
};
//then and catch
getIds
//this is for resolve
.then(ids => {
  //[123, 281, 234, 12]
  console.log(ids);
  return getRecipe(ids[2]);
})
.then(recipe => {
  //getRecipe 234:Pasta
  console.log(recipe);
  return getRelated('John');
})
.then(recipe => {
   //getRelated John: Pizza
  console.log(recipe);
})
.catch(error => {  //this is for reject
  console.log(error);
});
*/

//async-await
/*await can only be used with async function
  same thing as then catch on top */
async function getrecipesAw() {
  //first promise getIds
  const ids = await getIds;
  console.log(ids);
  const recipe = await getRecipe(ids[2]);
  console.log(recipe);
  const related = await getRelated('John');
  console.log(related);

  return recipe;
};
/*const rec = getrecipesAw(); // we'll get pending
console.log(rec);*/
getrecipesAw().then(result => { //but if you use then we ll get the result
  console.log(`${result} is the best ever!`);
});
```
