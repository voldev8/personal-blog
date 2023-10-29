---
title: Cheat-> Python - 3
date: "2015-06-08"
description: "Methods and Functions"
---

## Table of Contents

- [Methods and Functions](#methods-and-functions)
  - [Methods](#methods)
  - [Functions](#functions)
  - [lambda](#lambda)
  - [*args and *kwargs](#args-and-kwargs)

## Methods and Functions

### Methods

```python
lst = [1,2,3]
lst.append(4)
lst
# [1,2,3,4]
lst.count(2)
# 1


```

### Functions

```python
def is_prime(num):
    '''
    Naive method of checking for primes.
    '''
    for n in range(2,num):
        if num % n == 0:
            print(num,'is not prime')
            break
    else: # If never mod zero, then prime
        print(num,'is prime!')
```

### lambda

```python
#MAP
my_nums = [1,2,3,4]

list(map(lambda num: num ** 2, my_nums))

def square(x):
    return x**2
list(map(square, mylist))
# [1,4,9,16]

list(filter(lambda n: n % 2 == 0,my_nums))

def check_even(x):
    return x%2==0
list(filter(check_even, mylist))
# [2,4]

```

### args-and-kwargs

```python
def myfunc(*args):
    return sum(args)*.05

myfunc(40,60,20)
# 6.0

def myfunc(**kwargs):
    if 'juice' in kwargs:
        print(f"May I have some {kwargs['juice']} juice?")
    else:
        pass

myfunc(juice='orange')
# May I have some orange juice?
```
