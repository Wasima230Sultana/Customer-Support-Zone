# React + Vite

<h2>About JSX and it's used :</h2>
<h4>JSX:</h4>
<p>
JSX, or JavaScript XML, is a syntax extension for JavaScript primarily used with React to describe the structure of user interfaces. It allows developers to write HTML-like code directly within their JavaScript files. 
</p>
<h4>Why JSX used:</h4>
<p>
Makes code more readable and declarative.

Allows mixing HTML-like syntax with JavaScript.

Provides better debugging (error messages point to JSX).
</p>
<hr>

<h2>Different between State and Props : </h2>
<h4>State :</h4>
<p>
Purpose: To pass data and event handlers from a parent component to a child component, enabling data flow and communication between them. 

Source: Always come from a parent component. 

Mutability: Read-only (immutable); a child component cannot directly change its own props. 

Use props for data that comes from outside the component (parent to child). 
</p>

<h4>Props : </h4>
<p>

Purpose: To manage internal, dynamic data that changes over time within a component, often in response to user interactions or other internal logic.

Source: Managed and updated by the component itself.

Mutability: Mutable (changeable) within the component.

Use state for data that originates and changes inside the component. 
</p>
<hr>

<h2>About useState hook and how it's work : </h2>
<h4>useState hook : </h4>
<p>
useState is a React Hook that lets you add state to functional components.

Syntax :
const [state, setState] = useState(initialValue);
</p>

<h4>It's workflow : </h4>
<p>
state → current value.

setState → function to update state.

Updating state triggers re-render of the component.

Example :
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

</p>
<hr>

<h2>Share state between components in React : </h2>
<h4>Way to share state : </h4>
<p>
Lift state up : move state to a common parent and pass down via props.

React Context API : Context provides a way to share data (including state) that can be considered "global" for a tree of React components, without having to pass props down manually at every level. 

External State Management Libraries : For complex applications with a large amount of shared state or intricate state logic, libraries like Redux, MobX, or Zustand can be used. These libraries provide a centralized "store" for managing application state, which components can then connect to and subscribe to for updates. 
</p>
<hr>

<h2>Event handling done in React : </h2>
<h4>event handling : </h4>
<p>
React events are similar to DOM events but camelCased and handled with functions.
pass a function reference, not a string (onClick={handleClick} not onClick="handleClick()").

Example : 
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

</p>
<hr>