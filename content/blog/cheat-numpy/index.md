---
title: Cheat-> NumPy
date: "2015-06-10"
description: "Basics (working with numerical data)"
---

## Table of Contents

- [Basics](#basics)
  - [Creating Arrays](#creating-arrays)
  - [Array Attributes](#array-attributes)
  - [Array Operations](#array-operations)
  - [Array Indexing and Slicing](#array-indexing-and-slicing)
  - [Array Reshaping and Resizing](#array-reshaping-and-resizing)
  - [Array Functions](#array-functions)

## Basics

```python
import numpy as np
```

### Creating Arrays

```python
arr = np.array([1, 2, 3, 4, 5])              # Create a 1D array
matrix = np.array([[1, 2, 3], [4, 5, 6]])     # Create a 2D array

```

### Array Attributes

```python
arr.shape       # Shape of the array
len(arr)        # Length of the array
arr.ndim        # Number of array dimensions
arr.size        # Number of elements in the array
arr.dtype       # Data type of the array

```

### Array Operations

```python
arr2 = np.array([6, 7, 8, 9, 10])
arr + arr2                       # addition
arr - arr2                       # subtraction
arr * arr2                       # multiplication
arr / arr2                       # division
np.dot(arr, arr2)                # Dot product

```

### Array Indexing and Slicing

```python
arr[0]           # Access an element
arr[2:5]         # Slice elements from index 2 to 4 (exclusive)
matrix[0, 2]     # Access a specific element in a matrix
matrix[:, 1]     # Access all elements in the second column
arr[arr > 3]     # Filter elements based on a condition


```

### Array Reshaping and Resizing

```python
arr.reshape((3, 2))        # Reshape the array
np.resize(arr, (3, 2))     # Resize the array (repeating or truncating values)

```

### Array Functions

```python
np.zeros((2, 3))        # Create an array filled with zeros
np.ones((2, 3))         # Create an array filled with ones
np.arange(0, 10, 2)     # Create an array with a range of values
np.linspace(0, 1, 5)    # Create an array with evenly spaced values
np.random.rand(3, 2)    # Create an array with random values
np.max(arr)             # Find the maximum value in the array
np.min(arr)             # Find the minimum value in the array
np.sum(arr)             # Calculate the sum of all elements
np.mean(arr)            # Calculate the mean of all elements
np.median(arr)          # Calculate the median of all elements
np.std(arr)             # Calculate the standard deviation
np.sort(arr)            # Sort the array in ascending order
np.argsort(arr)         # Get the indices that would sort the array

```
