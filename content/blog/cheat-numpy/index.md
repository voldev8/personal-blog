---
title: Cheat-> SQL
date: "2015-05-11"
description: "Basics"
---

## Table of Contents

- [Basics](#basics)
  - [Manupilation](#manipulation)
  - [Queries](#queries)
  - [Aggregate Functions](#aggregate-functions)
  - [Multiple Tables](#multiple-tables)

## Basics

### Manipulation

```sql

-- Create Table
CREATE TABLE student (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE,
  grade INTEGER NOT NULL,
  age INTEGER DEFAULT 10
);

-- Delete Table
DROP TABLE student;

-- Insert into columns in order
INSERT INTO table_name
VALUES (value1, value2);

-- Insert into columns by name
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);

-- Alter Table
ALTER TABLE table_name
ADD column_name datatype;

-- Delete Statement
DELETE FROM table_name
WHERE some_column = some_value;

-- Update Statement
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE some_column = some_value;

-- Remove all data in a table
TRUNCATE TABLE student

```

### Queries

```sql

-- SELECT Statement
SELECT *
FROM movies;

-- DISTINCT Clause
SELECT DISTINCT city
FROM contact_details;

-- AND Operator
SELECT model
FROM cars
WHERE color = 'blue'
  AND year > 2014;

-- AS Clause
SELECT name AS 'movie_title'
FROM movies;

-- OR Operator
SELECT name
FROM customers
WHERE state = 'CA'
   OR state = 'NY';

-- % Wildcard
SELECT name
FROM movies
WHERE name LIKE 'The%';

-- _ Wildcard
SELECT name
FROM movies
WHERE name LIKE '_ove';

-- ORDER BY Clause
SELECT *
FROM contacts
ORDER BY birth_date DESC;

-- LIKE Operator
SELECT name
FROM movies
WHERE name LIKE 'Star%';

-- BETWEEN Operator
SELECT *
FROM movies
WHERE year BETWEEN 1980 AND 1990;

-- LIMIT Clause

SELECT *
FROM movies
LIMIT 5;

-- NULL Values

SELECT address
FROM records
WHERE address IS NOT NULL;

-- WHERE Clause
SELECT title
FROM library
WHERE pub_year = 2017;

```

### Aggregate Functions

```sql

-- Column References
SELECT COUNT(*) AS 'total_movies',
   rating
FROM movies
GROUP BY 2
ORDER BY 1;

-- SUM() Aggregate Function
SELECT SUM(salary)
FROM salary_disbursement;

-- MAX() Aggregate Function
SELECT MAX(amount)
FROM transactions;

-- COUNT() Aggregate Function
SELECT COUNT(*)
FROM employees
WHERE experience < 5;

-- MIN() Aggregate Function
SELECT MIN(amount)
FROM transactions;

-- AVG() Aggregate Function
SELECT AVG(salary)
FROM employees
WHERE experience < 5;

-- ROUND() Function
SELECT year,
   ROUND(AVG(rating), 2)
FROM movies
WHERE year = 2015;

-- GROUP BY Clause
SELECT rating,
   COUNT(*)
FROM movies
GROUP BY rating;

-- HAVING Clause
SELECT year,
   COUNT(*)
FROM movies
GROUP BY year
HAVING COUNT(*) > 5;

```

### Multiple Tables

##### Outer Join

An outer join will combine rows from different tables even
if the join condition is not met.
In a LEFT JOIN, every row in the left table is returned in
the result set, and if the join condition is not met, then
NULL values are used to fill in the columns from the right table.

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
  ON table1.column_name = table2.column_name;
```

##### WITH CLAUSE

The WITH clause stores the result of a query in a temporary table
(temporary_movies) using an alias.
Multiple temporary tables can be defined with one instance of the WITH keyword.

```sql
WITH temporary_movies AS (
SELECT _
FROM movies
)
SELECT _
FROM temporary_movies
WHERE year BETWEEN 2000 AND 2020;
```

##### UNION Clause

The UNION clause is used to combine results that appear from multiple
SELECT statements and filter duplicates.

For example, given a first_names table with a column name containing rows
of data “James” and “Hermione”, and a last_names table with a column name
containing rows of data “James”, “Hermione” and “Cassidy”, the result of
this query would contain three names: “Cassidy”, “James”, and “Hermione”.

```sql
SELECT name
FROM first_names
UNION
SELECT name
FROM last_names
```

##### CROSS JOIN Clause

The CROSS JOIN clause is used to combine each row from one table with each
row from another in the result set. This JOIN is helpful for creating all
possible combinations for the records (rows) in two tables.

The given query will select the shirt_color and pants_color columns from the
result set, which will contain all combinations of combining the rows in the
shirts and pants tables. If there are 3 different shirt colors in the shirts
table and 5 different pants colors in the pants table then the result set will
contain 3 x 5 = 15 rows

```sql
SELECT shirts.shirt_color,
pants.pants_color
FROM shirts
CROSS JOIN pants;
```

##### Inner Join

The JOIN clause allows for the return of results from more than one table by
joining them together with other results based on common column values specified
using an ON clause. INNER JOIN is the default JOIN and it will only return results
matching the condition specified by ON.

```sql
SELECT *
FROM books
JOIN authors
ON books.author_id = authors.id;
```
