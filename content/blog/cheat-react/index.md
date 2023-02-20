---
title: Cheat-> ReactJs
date: "2015-05-10"
description: "ReactJs Basics, Hooks, React Router"
---

## Table of Contents

- [Basics](#basics)
  - [Create a React App](#create-a-react-app)
  - [Class Component](#class-component)
  - [Functional Component](#functional-component)
  - [Props](#props)
  - [Lists](#lists)
  - [Events](#events)
  - [PropTypes](#propTypes)
- [Hooks](#hooks)
  - [useState](#useState)
  - [useEffect](#useEffect)
  - [useRef](#useRef)
  - [useContext](#useContext)
  - [useReducer](#useReducer)
- [Router](#Router)
  - [Part I](#part-I)
  - [Part II](#part-II)

## Basics

### Create a React App

```javascript
// Create a new app
npx create-react-app my-app-name

// Run the created app
cd my-app-name
npm start

```

### Class Component

```javascript
class ClassComponent extends React.Component {
  render() {
    return <div>Hello!</div>
  }
}

export default HelloComponent
```

### Functional Component

```javascript
// importing css
import "./App.css"
// React component
const App = () => {
  // class attribute as className and inline styles
  return (
    <>
      <h1
        className="main"
        // inline css
        style={{ fontSize: 24, margin: "0 auto", textAlign: "center" }}
      >
        // javascript in jsx (conditional example) Hello World I am{" "}
        {name === "Damon" ? "(admin)" : "(user)"}
      </h1>
      // Close every element
      <img src="/image/jpg" />
    </>
  )
}

export default App

// Render
ReactDOM.render(<App />, document.getElementById("root"))
```

### Props

```javascript
function App() {
  return <User name="John Doe" />
}

function User(props) {
  return <h1>Hello, {props.name}</h1>
}

// Children Props
function App() {
  return (
    <User>
      <h1>Hello, John Doe!</h1>
    </User>
  )
}

function User({ children }) {
  return children
}
```

### Lists

```javascript
function Players() {
  const users = ["Jane", "John", "Damon"]

  return (
    <ul>
      {users.map((id, user) => (
        <li key={id}> {user} </li>
      ))}
    </ul>
  )
}
```

### Events

```javascript
const clickHandler = e => alert(e.target)
function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={clickHandler}>Say Hi</button>
    </>
  )
}

// inline
function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={() => alert("Hello World")}>Say Hi</button>
    </>
  )
}
```

### PropTypes

```javascript
import PropTypes from "prop-types"

class Greeting extends React.Component {
  render() {
    const children = this.props.children
    return (
      <div>
        <h1>
          Hello, {this.props.name} {this.props.lastName}.
        </h1>
        {children}
      </div>
    )
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
}

// Specifies the default values for props:
Greeting.defaultProps = {
  lastName: "Stranger",
}
```

## Hooks

### useState

```javascript
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

### useEffect

```javascript
import React, { useState, useEffect } from "react"

function Example() {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    // clean up function runs before the component is unmounted
    return () => {
      console.log("Cleaned up")
    }
  }, [count])
  // Will run each time 'count' state change.
  // If empty array, it will then only run once on initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

### useRef

```javascript
import { useRef, useEffect } from "react"

// useRef allows us to get direct access to a JSX element.(DOM element)
// Does not trigger a re-render
const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    refContainer.current.focus()
  }, [])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
```

### useContext

```javascript
import { createContext, useContext } from "react"

// useContext is a hook that returns the data for the given context

const ThemeContext = createContext("light")
function App() {
  return (
    <ThemeContext.Provider value="light">
      <Component />
    </ThemeContext.Provider>
  )
}
function Component() {
  const theme = useContext(ThemeContext) // returns 'light'
  return (
    <div>
      <p>The current theme is: {theme}</p>
    </div>
  )
}
```

### useReducer

```javascript
import { useReducer } from "react"

// useReducer may be used as an alternative to useState.
// It’s ideal for complex state logic
// it uses the Redux pattern

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        throw new Error()
    }
  }, 0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  )
}
```

## Router

### Part I

```javascript
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Navbar /> // visible on every page
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" component={About} />
        // 404 page not found
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
```

### Part II

```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useParams
} from "react-router-dom";

// Redirect
const Profile = ({isLoggedIn}) => {
    if (!isLoggedIn) {
    return <Redirect to="/sign-up" />
  } else {
    return <ProfileInfo />
  }
}

// useParams
//  "/users/:userName"
export default const UserProfile () {
  const { userName } = useParams()
  return (
    <h1> Welcome {userName}! </h1>
  )
}

// useHistory
export default function Footer () {
  const history = useHistory();

  return (
    <footer>
      <button onClick={() => history.goBack()}>
        Back
      </button>
      <button onClick={() => history.goForward()}>
        Forward
      </button>
      <button onClick={() => history.push('/about')}>
        About
      </button>
    </footer>
  )
}
```
