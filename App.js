import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World From React!'
)
// console.log(heading)

const parent = React.createElement(
  'div',
  { id: "parent" },
  [React.createElement(
    'div',
    { id: "child1" },
    [React.createElement('h1', {}, "Namaste React 🚀"),React.createElement('h2', {}, "I'm a h2 tag")]
  ),
  React.createElement(
    'div',
    { id: "child2" },
    [React.createElement('h1', {}, "I'm a h1 tag"),React.createElement('h2', {}, "I'm a h2 tag")]
  )]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
