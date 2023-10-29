---
title: Cheat-> Pandas
date: "2015-06-11"
description: "Basics (working with data sets)"
---

## Table of Contents

- [Basics](#basics)
  - [Data Structures](#creating-arrays)
  - [Data Exploration](#data-exploration)
  - [Data Manipulation](#data-manipulation)
  - [Data Visualization](#data-visualization)

## Basics

```python
import pandas as pd
```

### Data Structures

```python
## Series
# A one-dimensional labeled array capable of holding any data type.
data = [1, 2, 3, 4, 5]
s = pd.Series(data)

# Creating a Series with custom index:
index = ['A', 'B', 'C', 'D', 'E']
s = pd.Series(data, index=index)

## DataFrames
# A two-dimensional labeled data structure with columns of potentially different data types.
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['NY', 'LA', 'SF']}
df = pd.DataFrame(data)

# Reading data from a CSV file:
df = pd.read_csv('data.csv')

# Writing to a CSV file:
df.to_csv('myDataFrame.csv')

```

### Data Exploration

```python
## Basic Information
df.head() # Displaying first few rows
df.tail() # Displaying last few rows
df.describe() # Summary statistics
df.info() # Information about the DataFrame
df.shape # Shape of the DataFrame
df.columns # Describe DataFrame columns

## Indexing and Selection
df['column_name'] # Selecting a column
df.column_name # Selecting a column
df[['col1', 'col2']] # Selecting multiple columns
df.loc[index] # Selecting rows by index
df.iloc[row_number] # Selecting rows by integer location
df[df['column_name'] > value] # Filtering rows based on condition

## Filtering and Sorting
df.sort_index() # Sort by labels along an axis
df[df['Age'] > 30] # Boolean filtering
df[(df['Age'] > 25) & (df['City'] == 'NY')] # Multiple conditions
df.sort_values(by='column_name', ascending=False) # Sorting by one or multiple columns

```

### Data Manipulation

```python
## Adding and Removing Data
df['NewColumn'] = values # Adding a new column
df.drop('column_name', axis=1, inplace=True) # Removing columns
df.drop(df[df['Age'] > 30].index, inplace=True) # Removing rows based on condition

## Handling Missing Data
df.isnull() # Checking for missing values
df.dropna() # Dropping rows with missing values
df.fillna(value) # Filling missing values with a specific value

## Grouping and Aggregating Data
# Grouping data by a column and calculating aggregates
df.groupby('column_name').agg({'agg_column': 'agg_function'})
# Multiple aggregations on different columns
df.groupby('column_name').agg({'col1': 'sum', 'col2': 'mean'})
df.groupby('A').agg({'B': ['min', 'max'], 'C': 'sum'})
# Pivot table
pd.pivot_table(df, values='value', index='index_col', columns='column_col', aggfunc='mean')

## Merging, Joining, and Concatenating
pd.concat([df1,df2,df3],axis=1) # Concatenation
pd.merge(left, right, how='outer', on=['key1', 'key2']) # Merge
left.join(right, how='outer') # Join

## Summary
df.sum() # Sum of values
df.cumsum() # Cumulative sum of values
df.min()/df.max() # Minimum/maximum values
df.idxmin()/df.idxmax() # Minimum/Maximum index value
df.mean() # Mean of values
df.median() # Median of values
df.columnName.std() # Standard deviation of column
df.columnName.nunique() # Number of unique values in column
df.columnName.unique() # List of unique values in column

## Applying Functions
def square(x):
  return x**2
# Apply this function to square every value in a specified column
df.column1 = df.column1.apply(square)
# Lambda functions can also be supplied to `apply()`
df.column2 = df.column2.apply(lambda x : 3*x)

```

### Data Visualization

```python
## Basic Plots
df.plot(x='x_column', y='y_column', kind='line') # Line plot
df.plot(x='x_column', y='y_column', kind='scatter') # Scatter plot
df.plot(x='x_column', y='y_column', kind='bar') # Bar plot
df['column'].plot(kind='hist') # Histogram

```
