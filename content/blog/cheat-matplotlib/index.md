---
title: Cheat-> Matplotlib
date: "2015-06-12"
description: "Basics (interactive visualizations)"
---

## Table of Contents

- [Basic Plotting](#basic-plotting)
  - [Line Plot](#line-plot)
  - [Scatter Plot](#scatter-plot)
  - [Bar Plot](#bar-plot)
  - [Histogram](#histogram)
- [Advanced Plotting](#advanced-plotting)
  - [Multiple Plots](#multiple-plots)
  - [Subplots](#subplots)
  - [Customizing Ticks and Labels](#customizing-ticks-and-labels)
  - [Annotations](#annotations)
  - [Additional Plot Types](#additional-plot-types)
- [Object-oriented method](#object-oriented-method)

## Basic Plotting

```python
import matplotlib.pyplot as plt
```

### Line Plot

```python
x = [1, 2, 3, 4, 5]
y = [10, 5, 8, 12, 6]

plt.plot(x, y, label='Data Series 1', color='blue', linestyle='-', marker='o')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Line Plot')
plt.legend()
plt.grid(True)
plt.show()

```

### Scatter Plot

```python
x = [1, 2, 3, 4, 5]
y = [10, 5, 8, 12, 6]

plt.scatter(x, y, label='Data Series 1', color='red', marker='o')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Scatter Plot')
plt.legend()
plt.grid(True)
plt.show()

```

### Bar Plot

```python
x = ['A', 'B', 'C', 'D', 'E']
y = [10, 5, 8, 12, 6]

plt.bar(x, y, color='green')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Plot')
plt.grid(True)
plt.show()

```

### Histogram

```python
data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5]

plt.hist(data, bins=5, color='orange')
plt.xlabel('Values')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.grid(True)
plt.show()

```

## Advanced Plotting

### Multiple Plots

```python
x = [1, 2, 3, 4, 5]
y1 = [10, 5, 8, 12, 6]
y2 = [8, 6, 4, 10, 7]

plt.plot(x, y1, label='Data Series 1', color='blue', linestyle='-', marker='o')
plt.plot(x, y2, label='Data Series 2', color='red', linestyle='--', marker='x')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Multiple Plots')
plt.legend()
plt.grid(True)
plt.show()

```

### Subplots

```python
x = [1, 2, 3, 4, 5]
y1 = [10, 5, 8, 12, 6]
y2 = [8, 6, 4, 10, 7]

plt.subplot(2, 1, 1)
plt.plot(x, y1, label='Data Series 1', color='blue', linestyle='-', marker='o')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Subplot 1')
plt.legend()
plt.grid(True)

plt.subplot(2, 1, 2)
plt.plot(x, y2, label='Data Series 2', color='red', linestyle='--', marker='x')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Subplot 2')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()

```

### Customizing Ticks and Labels

```python
x = [1, 2, 3, 4, 5]
y = [10, 5, 8, 12, 6]

plt.plot(x, y, label='Data Series 1', color='blue', linestyle='-', marker='o')

plt.xlabel('X-axis Label', fontsize=14, color='green')
plt.ylabel('Y-axis Label', fontsize=14, color='red')
plt.title('Customizing Ticks and Labels', fontsize=16)
plt.xticks([1, 2, 3, 4, 5], ['A', 'B', 'C', 'D', 'E'], rotation=45)
plt.yticks(range(0, 15, 2))

plt.legend()
plt.grid(True)
plt.show()

```

### Annotations

```python
x = [1, 2, 3, 4, 5]
y = [10, 5, 8, 12, 6]

plt.plot(x, y, label='Data Series 1', color='blue', linestyle='-', marker='o')

plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.title('Annotations')

plt.annotate('Important Point', xy=(3, 8), xytext=(3.5, 9),
             arrowprops=dict(arrowstyle='->', color='black'))

plt.legend()
plt.grid(True)
plt.show()

```

### Additional Plot Types

```python
# Pie Chart
sizes = [15, 30, 45, 10]
labels = ['A', 'B', 'C', 'D']
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140, colors=['yellow', 'lightgreen', 'lightblue', 'pink'])
plt.axis('equal')  # Equal aspect ratio ensures the pie chart is circular.
plt.title('Pie Chart')
plt.show()

# Box Plot
data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5]
plt.boxplot(data)
plt.title('Box Plot')
plt.show()

# Heatmap
import seaborn as sns
data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sns.heatmap(data, annot=True, cmap='coolwarm')
plt.title('Heatmap')
plt.show()

```

## Object-oriented method

```python
import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [10, 5, 8, 12, 6]

# Create a figure and axis object
fig, ax = plt.subplots()

# Plot the data on the axis
line = ax.plot(x, y, color='blue', linestyle='-', marker='o', label='Data Series 1')

# Customize axis labels and title
ax.set_xlabel('X-axis Label')
ax.set_ylabel('Y-axis Label')
ax.set_title('Line Plot')

# Customize ticks and grid
ax.set_xticks([1, 2, 3, 4, 5])
ax.set_yticks(range(0, 15, 2))
ax.grid(True)

# Add a legend
ax.legend()

# Save Image
plt.savefig('foo.png' )

# Display the plot
plt.show()

```
