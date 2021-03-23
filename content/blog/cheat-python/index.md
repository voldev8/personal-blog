---
title: Cheat-> Python
date: "2015-05-06"
description: "Basics"
---

## Table of Contents

- [Basics](#basics)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Lists](#lists)
  - [Dictionaries](#dictionaries)
  - [Tuples](#tuples)
  - [Sets](#sets)
  - [Booleans](#booleans)

## basics

### numbers

```python
a = 5
a = a+a
# a = 10
a *= 2
# a = 20

type(a)
# int

profit = 100
tax_rate = 0.3
tax = profit*tax_rate
# tax = 30

```

### strings

```python
print('print \n a new line')
# print
# a new line

s = 'Hello'
s[1]
# e
s[1:]
# ello
s[-1]
# o
s[::-1]
# elloh
s + ' There'
# Hello There
s.upper()
# HELLO
s.lower()
# hello
s.split('e')
# ['H', 'llo']

name = 'Volkan'

print(f"My name is {name}.")
print('My name is {}.'.format(name))
print("My name is %s." %name)

# My name is Volkan.

```

### lists

```python
my_list = [1,'two',False]
len(my_list)
# 3
my_list[0]
# 1
my_list[1:]
# ['two', False]
my_list.append(4)
# [1, 'two', False, 4]
my_list.pop()
# 4
my_list
# [1, 'two', False]
my_list.pop(0)
# ['two', False]
my_list.reverse()
# [False, 'two']
another_list = [1, 3, 2]
another_list.sort()
another_list
[1, 2, 3]

# List Comprehensions
lst = [x**2 for x in range(0,5)]
lst
# [0, 1, 4, 9, 16]

```

### dictionaries

```python
my_dict = {'key1':'value1','key2':'value2'}
my_dict['key2']
# 'value2'
new_dict ={}
new_dict['new_key'] = 'new_value'
new_dict
# {'new_key':'new_value'}
my_dict.keys()
# dict_keys(['key1', 'key2'])
my_dict.values()
# dict_values([('key1','value1'), ('key2','value2')])
```

### tuples

```python
t = (1,2, 'three')
t[0]
# 1
t.index(1)
# 0
t.count(1)
# 1
t[0] = 'one'
# TypeError (tuples are immutable)

```

### sets

```python
s = set()
s.add(1)
s
# {1}
s.add(2)
s
# {1,2}
s.add(1)
s
# {1,2} (sets only have unique elements)

```
### booleans

```python
a = True
a
# True
1 > 4
# False
b = None
print(b)
# None 
```

