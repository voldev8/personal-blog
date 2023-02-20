---
title: Cheat-> Python - 2
date: "2015-05-07"
description: "Statements"
---

## Table of Contents

- [Statements](#statements)
  - [If](#if)
  - [for Loops](#for-loops)
  - [while Loops](#while-loops)
  - [Operators](#operators)

## statements

### if

```python
x = 'two'

if x == 'one':
    print('It is one!')
elif x =='two':
    print('it is two!')
else:
    print("Unknown")
# 'it is two!'

```

### for loops

```python
my_list = [1,2,3]
for num in my_list:
  print(num)
# 1
# 2
# 3
for num in my_list:
  if num % 2 == 0:
    print(num)
# 2

```

### while loops

```python
x = 0

while x < 5:
    print('x: ',x)
    x+=1
    if x==3:
        print('Breaking because x==3')
        break
    else:
        print('continuing...')
        continue

# x: 0
# continuing...
# x: 1
# continuing...
# x: 2
# Breaking because x==3

```

### operators

```python
list(range(0,4,2))
# [0,2]
for i,l in enumerate('abc'):
    print("index: {}, letter: {}".format(i,l))
# index: 0, letter: a
# index: 1, letter: b
# index: 2, letter: c
mylist_one = [1,2,3]
mylist_two = ['a','b','c']
list(zip(mylist_one, mylist_two))
# [(1, 'a'), (2, 'b'), (3, 'c')]
'x' in ['x','y','z']
# True
```
