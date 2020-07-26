---
title: Cheat-> Html-Css
date: "2015-05-02"
description: "This is where everything starts"
---

## Table of Contents

### HTML

- [Basic page](#basic-page)
- [Head](#head)
- [Basics](#basic-content)
  - [Headings](#headings)
  - [Paragraphs](#paragraphs)
  - [Unordered list](#unordered-list)
  - [Ordered list (formatting, links)](#ordered-list)
  - [Description list](#description-list)
  - [Extra Formatting](#extra-formatting)
- [Multimedia](#multimedia)
  - [Images](#images)
  - [Figure](#figure)
  - [Video](#video)
  - [Audio](#audio)
  - [Iframe](#iframe)
  - [Svg](#svg)
  - [Responsive Images](#responsive-images)
- [Tables](#tables)
- [Forms](#forms)
- [HTML5 Semantic](#html5-semantic)
- [Additions](#additions)

### CSS

- [Selectors](#selectors)
- [Box Model](#box-model)
- [Display and Positioning](#display-and-positioning)
- [Colors](#colors)
- [Typography](#typography)
- [Responsive Design](#responsive-design)
- [Animation](#animation)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Basic page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Head

```html
<head>
  <meta charset="utf-8" />
  <!--This element simply specifies the document's character encoding  -->
  <!-- Adding an author and description -->
  <meta name="developer" content="Damon Brooks" />
  <meta
    name="description"
    content="This info here can be helpful for search engines (SEO)"
  />
  <!-- facebook small icon meta info og:title, og:description and goes on... -->
  <meta
    property="og:image"
    content="https://en.wikipedia.org/wiki/Batman#/media/File:Batman_Detective_Comics_Vol_2_1.png"
  />
  <meta name="description" content="This is for google searches" />
  <meta property="og:title" content="html learning center" />
  <!-- small icon on browser -->
  <link rel="icon" sizes="114x114" href="multi/spidey.png" />
  <!-- fav icon -->
  <link rel="shortcut icon" href="favicon.ico" type="multi/spidey.png" />
  <!-- for the css file -->
  <link rel="stylesheet" href="mystyle.css" />
  <title>HTML-head</title>
</head>
```

## Basic content

### Headings

```html
<!-- Main to less important -->
<h1>Heading</h1>
<h6>heading6</h6>
```

### Paragraphs

```html
<p>
  Paragraph one.<br />
  Other line.
</p>
<p>Paragraph two.</p>
<hr />
<p>line above.</p>
```

### Unordered list

```html
<ul id="unorderedList">
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

### Ordered list

```html
<ol id="orderedList">
  <li><i>italic</i></li>
  <li><b>bold</b></li>
  <li><u>underlined</u></li>
  <li>
    This is a hyperlink to
    <!-- in href= "html2.html" same dir
                href="dir/html.html" diff dir
                href="../gobackanddiff/html.html"
        -->
    <!--opens up in a new tab target="_blank" -->
    <a
      href="https://www.mozilla.org/en-US/"
      target="_blank"
      title="The best place to find more information about Mozilla's
            mission and how to contribute"
      >the Mozilla homepage</a
    >.
  </li>
  <li>
    <a
      href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
      download="firefox-39-installer.exe"
    >
      Download Firefox 39 for Windows
    </a>
  </li>
  <li>
    <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
  </li>
  <li>
    <a
      href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&amp;subject=The%20subject%20of%20the%20email &amp;body=The%20body%20of%20the%20email"
    >
      Send mail with cc, bcc, subject and body
    </a>
  </li>
</ol>
```

### Description list

```html
<!-- Description Lists terms and definitions -->
<dl>
  <dt>description title</dt>
  <dd>description term</dd>
  <dt>blockquote</dt>
  <dd>
    <blockquote
      cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
    >
      <p>
        The
        <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
        <em>HTML Block Quotation Element</em>) indicates that the enclosed text
        is an extended quotation.
      </p>
    </blockquote>
  </dd>
  <dt>inline quote</dt>
  <dd>
    inline quote— <code>&lt;q&gt;</code
    ><q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
      This text is inside quotation marks</q
    >
  </dd>
</dl>
```

### Extra formatting

```html
<cite>(cite)title of the work </cite><br />
<bdo dir="rtl">Right to left text</bdo>
<p>
  Abbreviations <abbr title="Hypertext Markup Language">HTML</abbr> for example
</p>

<address>
  <p>Address, Manchester by the sea, USA</p>
</address>

<p><mark>Superscript:(marked)</mark> 25<sup>th</sup> of May 2011.</p>
<p>Subscript: C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
```

## Multimedia

### Images

```html
<img
  src="multi/spidey.png"
  alt="spiderman image"
  title="Spidey"
  height="300px"
  width="300px"
  usemap="#dotMap"
/>
<!-- link from only a part of image -->
<map name="dotMap">
  <!-- coords = vertical, horizontal,radius-->
  <area
    shape="circle"
    coords="150,150,50"
    alt="circle"
    href="https://www.yahoo.com"
  />
</map>
```

### Figure

```html
<figure>
  <img src="multi/batman.png" alt="batman standing" height="400px" />
  <figcaption>Batman</figcaption>
</figure>
```

### Video

```html
<video src="multi/spidey.mp4" controls>
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="img/spidey.mp4">link to the video</a> instead.
  </p>
</video>
<!-- Video autoplay muted -->
<video controls width="200px" autoplay loop muted>
  <source src="multi/spidey.mp4" type="video/mp4" />
  <track kind="subtitles" src="multi/subtitle.vtt" srclang="en" />
</video>

<embed
  type="video/mp4"
  src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4"
  width="250"
  height="200"
/>
```

### Audio

```html
<audio controls>
  <source src="multi/spideya.mp3" type="audio/mp3" />
</audio>
```

### Iframe

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ZqF43uD3kKQ"
  frameborder="0"
  gesture="media"
  allow="encrypted-media"
  allowfullscreen
></iframe>
```

### Svg

```svg
  <svg
    version="1.1"
    basprofile="full"
    width="400"
    height="200"
    xlmns="http://www.w3.org/2000/svg"
  >
    <rect width="400px" height="200px" fill="black" />
    <circle cx="200" cy="100" r="50" fill="yellow" />
  </svg>

```

### Responsive Images

```html
<img
  srcset="img-320w.jpg 320w, img-480w.jpg 480w, img-800w.jpg 800w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  src="img-800w.jpg"
  alt="description"
/>

<img
  srcset="img-320w.jpg,  ***you should give a width to img in CSS***
          img-480w.jpg 1.5x,
          img-640w.jpg 2x"
  src="img-640w.jpg"
  alt="description"
/>

<picture>
  <source media="(max-width: 799px)" srcset="img480w.jpg" />
  <source media="(min-width: 800px)" srcset="img800w.jpg" />
  <img src="img800w.jpg" alt="description" />
</picture>
```

## Tables

```html
<table style="border: 1px solid black;">
  <caption>
    Statistics
  </caption>
  <colgroup>
    <col />
    <col />
    <col />
    <col />
    <col style="background-color: yellow;" span="1" />
    <col style="background-color: red;" span="1" />
  </colgroup>
  <thead style="background-color: black; color: white;">
    <th>Players</th>
    <th>Team</th>
    <th>Matches</th>
    <th>Assists</th>
    <th>Yellow Cards</th>
    <th>Red Cards</th>
  </thead>
  <tbody>
    <tr>
      <td>Ricardo Quaresma</td>
      <td>Besiktas</td>
      <td>12</td>
      <td>6</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Oguzhan Ozyakup</td>
      <td>Besiktas</td>
      <td>10</td>
      <td>4</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Tolgay Arslan</td>
      <td>Besiktas</td>
      <td>6</td>
      <td>4</td>
      <td>1</td>
      <td>0</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td>28</td>
      <td>14</td>
      <td>4</td>
      <td>3</td>
    </tr>
  </tfoot>
</table>
```

| tag          | element                     |
| ------------ | --------------------------- |
| **table**    | table                       |
| **caption**  | caption                     |
| **colgroup** | specifies groups of columns |
| **col**      | specifies column properties |
| **thead**    | group header content        |
| **th**       | table heading               |
| **tbody**    | group body content          |
| **tr**       | table row                   |
| **td**       | table cell                  |
| **tfoot**    | group footer content        |

## Forms

```html
<form action="where the data should be send" method="GET or POST">
  <br />
  <!--name-->
  <div>
    <!-- label is the value of id -->
    <label for="name">Name: </label><br />
    <!-- text input -->
    <!-- min-max values are set -->
    <input
      type="text"
      id="name"
      name="user_name"
      required
      minlength="3"
      maxlength="15"
    />
  </div>
  <!--Email-->
  <div>
    <label for="mail">E-mail:</label><br />
    <!-- required!! -->
    <input type="email" id="mail" name="user_mail" required />
  </div>
  <!--Password-->
  <div>
    <label for="password">Password</label><br />
    <!-- Matching a pattern -->
    <input
      type="password"
      id="password"
      name="user_password"
      value="psw"
      pattern="[a-zA-Z0-9]+"
    />
  </div>
  <!--submit button-->
  <div>
    <br />
    <!-- type submit creates a submit button -->
    <!-- When a <form> is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.  -->
    <button type="submit">Submit</button>
  </div>

  <br />
  <!--number input-->
  <div>
    <label for="amount">Number input</label>
    <input
      id="amount"
      name="amount"
      type="number"
      step="1"
      required
      min="1"
      max="10"
    />
  </div>
  <br />
  <!-- range input-->
  <div>
    <label for="numRange">Range!!</label>
    <br />
    <span>Less</span>
    <input
      id="numRange"
      name="numRange"
      type="range"
      min="0"
      max="5"
      step="0.5"
    />
    <span>More</span>
  </div>
  <br />
  <!--checkbox input -->
  <div>
    <label for="checkbox1">checkbox1</label>
    <input type="checkbox" id="checkbox1" name="checkboxed" />
    <label for="checkbox2">checkbox2</label>
    <input type="checkbox" id="checkbox2" name="checkboxed" />
  </div>
  <br />
  <!--textarea -->
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <br />
  <!--radio input-->
  <div>
    <label for="good-player">
      <input type="radio" id="good-player" name="good-bad-player" checked />
      Good Player
    </label>
    <label for="bad-player">
      <input type="radio" id="bad-player" name="good-bad-player" /> Bad Player
    </label>
  </div>
</form>
<hr />
<!-- dropdown list-->
<p>Pick a day</p>
<select name="days">
  <option value="monday">Monday</option>
  <option value="tuesday">Tuesday</option>
  <option value="wednesday">Wednesday</option>
  <option value="thursday">Thursday</option>
  <option value="friday">Friday</option>
</select>
<!--datalist input-->
<p>pick a browser(datalist)</p>
<form action="/action_page.php">
  <input list="browsers" />
  <datalist id="browsers">
    <option value="Internet Explorer"> </option>
    <option value="Firefox"> </option>
    <option value="Chrome"> </option>
    <option value="Opera"> </option>
    <option value="Safari"> </option>
  </datalist>
</form>
```

## HTML5 Semantic

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Our team</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <!-- A Search form is another common non-linear way to navigate through a website. -->
  <form>
    <input type="search" name="q" placeholder="Search query" />
    <input type="submit" value="Go!" />
  </form>
</nav>

<main>
  <article>
    <h2>Article heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    <hr />

    <h3>subsection</h3>
    <p>
      Donec ut librero sed accu vehicula ultricies a non tortor.<br />
      <!-- linebreaks -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
    </p>
    <p>
      Pelientesque auctor nisi id magna consequat sagittis.
    </p>
    <hr />
    <!-- horizontal rules -->

    <h3>Another subsection</h3>
    <p>
      Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus.
    </p>
    <p>
      Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique
      vitae sagittis vel odio.
    </p>
  </article>

  <section></section>

  <aside>
    <div style="float: left; margin-right: 90px;">
      <h2>Related</h2>

      <ul>
        <li><a href="#">Oh I do like to be beside the seaside</a></li>
        <li><a href="#">Oh I do like to be beside the sea</a></li>
        <li><a href="#">Although in the North of England</a></li>
        <li><a href="#">It never stops raining</a></li>
        <li><a href="#">Oh well...</a></li>
      </ul>
    </div>
    <div style="padding-left: 40px;">
      <img src="multi/html5.gif" alt="scheme of html5" />
    </div>
  </aside>
</main>
<footer>
  <p>©Copyright 2125 by nobody. All rights reserved.</p>
</footer>
```

| tag         | element                                             |
| ----------- | --------------------------------------------------- |
| **header**  | introductory content                                |
| **nav**     | provide navigation links                            |
| **main**    | dominant content                                    |
| **article** | a forum post, a newspaper article, or a blog entry. |
| **section** | represents a standalone section                     |
| **aside**   | frequently presented as sidebars or call-out boxes. |
| **footer**  | info about author, copyright, links                 |

## Additions

# CSS

## Selectors

```css
/*every single element on page */
* {
  box-sizing: border-box;
  font-size: 24px;
}
/*id selector*/
#newId {
  background-color: #7fe7cc;
  height: 40px;
  padding-top: 10px;
}
/*class selector*/
.newClass {
  background-color: #dfe38e;
  height: 80px;
}
/*descendant selector*/
header h2 {
  padding: 2px;
}
/*type selector*/
p {
  font-family: fantasy;
}
/* :visited :link */
#link-4:link {
  color: #f17e7e;
}
#link-4:visited {
  color: #efca8c;
}
/*adjacent selector (only the element that is immediately preceded by the former element)*/
.navi + p {
  font-size: 34px;
}
/*direct child*/
.navi > ul {
  border: 1px solid black; /* doesnt add another border to ul inside ul*/
}
/*sibling combinator*/
.navi ~ p {
  color: violet; /*this selects all siblings not just the first one like + */
}
/*attributes selector*/
[data-vegetable] {
  text-transform: uppercase;
}
/* not selector*/
.item-list:not([data-vegetable]) {
  text-transform: lowercase;
}
/*nth child*/
.items li:nth-child(3) a {
  color: red !important;
}
/*nth last child*/
.items > li:nth-last-child(1) a {
  color: green;
}
/*starts with*/
a[href^="http"] {
  background-color: #f17e7e;
}
/*contains*/
a[href*="developers"] {
  background-color: #3a9679;
}
/*ends with*/
a[href$="png"] {
  background-color: #f2c0ff;
}
/*custom attributes*/
li[data-vegetable="liquid"] {
  background-color: #f2c090;
}
/*first letter and nth of type*/
header p:nth-of-type(2)::first-letter {
  font-size: 40px;
  color: #3a9679;
}
```

### Box Model

```css
/* The vertical margins will collapse to 30 pixels
  instead of adding to 50 pixels. */
.block-one {
  margin: 20px;
}
.block-two {
  margin: 30px;
}
/* horizontally center element */
div {
  margin: auto;
}
/* add scroll if element is larger than container */
.scroll {
  overflow: scroll;
}
/* max-width, min-width */
.column {
  max-width: 100px;
  width: 200px;
}
/* hides element without removing them */
.invisible-elements {
  visibility: hidden;
}
/* hides element removing them */
.col {
  display: none;
}
/* content-box does not include padding and margin */
.col {
  box-sizing: border-box;
}
```

### Display and Positioning

```css
/* element2 will overlap element1 */
.element1 {
  z-index: 1;
}
.element2 {
  z-index: 1000;
}
/* position can be static, relative,absolute, fixed */
nav {
  position: fixed;
}
/* takes the full width */
.container1 {
  display: block;
}
/* take as little space as possible */
.container2 {
  display: inline;
}
/* can appear next to each other */
.container3 {
  display: inline-block;
}
/* The content will float to the left side of the
  container. */
.left {
  float: left;
}
/* The content will float to the right side of the
  container. */
.right {
  float: right;
}
/*This determines that no other elements within the same
  containing element are allowed to float on the left side
  of this element.*/
.element {
  clear: left;
}
/*This determines that no other elements within the same
  containing element are allowed to float on the right side
  of this element.*/
.element {
  clear: right;
}
/*This determines that no elements within the same
  containing element are allowed to float on either side of
  this element.*/
.element {
  clear: both;
}
/*This determines that other elements within the same
  containing element are allowed to float on both side of
  this element.*/
.element {
  clear: none;
}
```

### Colors

```css
h1 {
  color: aqua;
}
.transparent {
  color: transparent;
}
.red {
  color: #ff0000;
}
.light-blue {
  background-color: hsl(200, 70%, 50%);
}
.green {
  color: rgb(0, 255, 0);
}
```

### Typography

```css
/* Sets the text as bolder. */
p {
  font-weight: 700;
}
.text {
  font-style: italic;
}

/* external fonts */
@font-face {
  font-family: "Glegoo";
  src: url("../fonts/Glegoo-Regular.ttf") format("truetype");
}

/* Here `Arial` is the fallback font for <p> tags */
p {
  font-family: "Helvetica", "Arial";
}
p {
  line-height: 10px;
}
/* colorful text */
.colorful-headline {
  display: inline-block;
  background-image: linear-gradient(to right, green, red);
  background-clip: text;
  color: transparent;
}
```

### Responsive Design

```css
/* unit em */
.nav-container {
  font-size: 10px;
}
.nav-container span {
  font-size: 1.5em; /* 10 x 1.5 = 15px */
}
/* percentage */
.news-row {
  height: 300px;
  width: 500px;
}
.news-row .news-column {
  height: 80%; /* 240px */
  width: 50%; /* 250px */
}
/* view-height and view-width */
.news-row {
  height: 100vh;
  width: 50vw;
}

/* ruleset for >= 600px media type screen, print, handheld */
@media only screen and (min-width: 600px) {
}
/* CSS ruleset */
@media only screen and (max-width: 480px) and (minresolution: 300dpi) {
}
/* ruleset for 480px - 600px */
@media only screen and (min-width: 480px) and (max-width: 600px) {
}
```

### Animation

```css
#translate {
  width: 200px;
  height: 100px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 4px;
  /*translate x,y*/
  -ms-transform: translate(200px, 100px); /*explorer*/
  -webkit-transform: translate(200px, 100px); /*Safari*/
  transform: translate(200px, 100px); /*standard*/
}
#rotate {
  width: 50px;
  height: 50px;
  background-color: red;
  border: 1px solid black;
  -ms-transform: rotate(20deg);
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
}
#scale {
  margin: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  /*scale x,y*/
  -ms-transform: scale(0.5, 0.5); /*explorer*/
  -webkit-transform: scale(0.5, 0.5); /*Safari*/
  transform: scale(0.5, 1); /*standard*/
}
#matrix {
  width: 300px;
  height: 200px;
  background-color: green;
  border: 1px solid black;
  -ms-transform: matrix(0.5, -0.3, 0.3, 1, 500, 0); /* IE 9 */
  -webkit-transform: matrix(0.5, -0.3, 0.3, 1, 500, 0); /* Safari */
  transform: matrix(
    0.5,
    -0.3,
    0.3,
    1,
    500,
    0
  ); /*matrix(scaleX,skewY,skewX,scaleY,
      translateX,translateY)*/
  font-size: 30px;
  text-align: center;
}
#transition {
  width: 200px;
  height: 200px;
  background-color: yellow;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  -webkit-transition: width 2s, height 3s linear;
  transition: width 2s, height 3s linear;
}
#transition:hover {
  width: 300px;
  height: 300px;
  background-color: red;
}
#anime1 p {
  margin: 0;
  padding: 0;
}
#anime1 {
  margin-top: 30px;
  margin-left: 30px;
  background-color: #92b901;
  padding: 8px 10px;
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 20px;
  width: 48px;
  -webkit-animation-name: anim1; /*Chrome,Safari,Opera*/
  -webkit-animation-duration: 5s;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-time: 4;
  -webkit-animation-direction: alternate;
  animation-name: anim1;
  animation-duration: 5s;
  animation-delay: 2s;
  animation-iteration-count: 4;
  animation-direction: alternate;
  position: relative;
}
@-webkit-keyframes anim1 {
  from {
    background-color: #92b901;
    left: 0px;
  }
  to {
    background-color: #29c6d1;
    left: 300px;
  }
}
@keyframes anim1 {
  from {
    background-color: #92b901;
    left: 0px;
  }
  to {
    background-color: #29c6d1;
    left: 300px;
  }
}
#height {
  height: 500px;
}
#anime2 {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  background-color: green;
  position: relative;
  -webkit-animation: anim2 6s ease-out 2s infinite alternate;
  animation: anim2 6s ease-out 2s infinite alternate;
}
#anime2:hover {
  animation-play-state: paused;
}
@-webkit-keyframes anim2 {
  0% {
    background-color: green;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: blue;
    left: 300px;
    top: 0px;
  }
  50% {
    background-color: orange;
    left: 300px;
    top: 300px;
  }
  75% {
    background-color: yellow;
    left: 0px;
    top: 300px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}
@keyframes anim2 {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 300px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 300px;
    top: 300px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 300px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

#rainbowText {
  animation-name: rainbowtext;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  position: absolute;
}
@keyframes rainbowtext {
  0% {
    color: red;
    font-size: 20px;
  }
  25% {
    color: orange;
  }
  50% {
    color: yellow;
    font-size: 40px;
  }
  75% {
    color: green;
  }
  100% {
    color: blue;
    font-size: 20px;
  }
}

.imagefilter {
  position: relative;
  top: 120px;
  border-top: 2px solid black;
}
.imagefilter img {
  width: 33%;
  float: left;
  height: auto;
}
.blur {
  -webkit-filter: blur(4px);
  filter: blur(4px);
}
.brightness {
  -webkit-filter: brightness(250%);
  filter: brightness(250%);
}
.contrast {
  -webkit-filter: contrast(180%);
  filter: contrast(180%);
}
.grayscale {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.huerotate {
  -webkit-filter: hue-rotate(180deg);
  filter: hue-rotate(180deg);
}
.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.opacity {
  -webkit-filter: opacity(50%);
  filter: opacity(50%);
}
.saturate {
  -webkit-filter: saturate(7);
  filter: saturate(7);
}
.sepia {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}
.shadow {
  -webkit-filter: drop-shadow(8px 8px 10px green);
  filter: drop-shadow(8px 8px 10px green);
}
```
