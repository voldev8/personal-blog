---
title: Cheat-> Python
date: "2015-05-07"
description: "Object Oriented Programming"
---

## Table of Contents

- [Object Oriented Programming](#oop)
  - [class](#class)
  - [Methods](#methods)
  - [Inheritance](#inheritance)
  - [Polymorphism](#polymorphism)
  - [Special Methods](#special-methods)

## Object Oriented Programming

### class

```python
class Animal:
    pass

x = Animal()

print(type(x))
# <class '__main__.Animal'>

```

### Methods

```python
class Circle:
    pi = 3.14

    # Circle gets instantiated with a radius (default is 1)
    def __init__(self, radius=1):
        self.radius = radius 
        self.area = radius * radius * Circle.pi

    # Method for resetting Radius
    def setRadius(self, new_radius):
        self.radius = new_radius
        self.area = new_radius * new_radius * self.pi

    # Method for getting Circumference
    def getCircumference(self):
        return self.radius * self.pi * 2


c = Circle()

print('Radius is: ',c.radius)
print('Area is: ',c.area)
print('Circumference is: ',c.getCircumference())
# Radius is:  1
# Area is:  3.14
# Circumference is:  6.28

```

### Inheritance

```python
class Animal:
    def __init__(self):
        print("Animal created")

    def whoAmI(self):
        print("Animal")

    def eat(self):
        print("Eating")


class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print("Dog created")

    def whoAmI(self):
        print("Dog")

    def bark(self):
        print("Woof!")

d = Dog()
# Animal created
# Dog created

d.whoAmI()
# Dog
d.eat()
# Eating
d.bark()
# Woof!

```

### Polymorphism

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name+' says Woof!'
    
class Cat:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name+' says Meow!' 
    
niko = Dog('Niko')
felix = Cat('Felix')

print(niko.speak())
print(felix.speak())
# Niko says Woof!
# Felix says Meow!

```

### Special Methods

```python
class Movie:
    def __init__(self, title, director, length):
        print("A movie is created")
        self.title = title
        self.director = director
        self.length = length

    def __str__(self):
        return "Title: %s, director: %s, Time(mins): %s" %(self.title, self.director, self.length)

    def __len__(self):
        return self.length

    def __del__(self):
        print("A movie is destroyed")

movie = Movie("Matrix", "Wachowski", 150)

#Special Methods
print(movie)
print(len(movie))
del movie
```