---
title: Markdown
date: "2015-05-01"
description: "Basics of markdown"
---

Some basics of markdown

```
# h1

## h2

### h3
```

# h1

## h2

### h3

```
_italics_

**emphasis**

~~Scratch this.~~

H<sub>2</sub>O

X<sup>2</sup>
```

_italics_

**emphasis**

~~Scratch this.~~

H<sub>2</sub>O

X<sup>2</sup>

```
1. First level
    1. Second level
        - Third level
            - Fourth level

2. Actual numbers don\'t matter, just that it\'s a number
   1. Ordered sub-list

3. And another item.
```

1. First level

   1. Second level
      - Third level
        - Fourth level

1. Actual numbers don't matter, just that it's a number

   1. Ordered sub-list

1. And another item.

```
- [x] Fix Bug 13
- [ ] Add Feature 19
- [ ] Add unit tests

```

- [x] Fix Bug 13
- [ ] Add Feature 19
- [ ] Add unit tests

```
<kbd>ctrl + shift + p</kbd>
```

<kbd>ctrl + shift + p</kbd>

```
> Blockquote

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

<https://www.markdownguide.org>

<mail@email.com>

[![An old rock in the desert](/../../assets/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

```

> Blockquote

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

<https://www.markdownguide.org>

<mail@email.com>

[![An old rock in the desert](/../../assets/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

````
```javascript
function func():
  return
```

```python
def func():
  pass
```

````

```javascript
function func():
  return
```

```python
def func():
  pass
```

```
---

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

```

---

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

You can include diagrams using Mermaid.
You can use mathjax for inline math expression.
