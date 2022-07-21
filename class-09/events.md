# Event Handling

Event is FIRED (or RAISED)

Code is TRIGGERED

## Event types

- click
- submit
- onChange
- hover
- on page load
- on mouse over
- on key press
- on key release

**Event listener**
: code that is TRIGGERED when an event is FIRED

**Bind**
: bind or tether an event listener to the event

**Event Handler**
: code that runs in response to an event

## We will use DOM 2 Level event handling in this class

Do not use anything else

## Old ways to do event handling (DO NOT DO THIS!)

- In the HTML: `<article onClick="handleClick">`

- In the JavaScript: `element.onEvent = functionName;`
Ex.: `button(document.getElementById('button')).onSubmit=handleEvent;`

**Methods**
: functional logic assigned to an object property

**Callback functions**
: functions that are entered as an argument to another method or function

**Helper functions**
: function that is called inside another function or method.

```js
// from Modzilla docs:
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name); // callback function
  greeting(name); // helperfunction
}

processUserInput(greeting);
```

In processUserInput, "callback" is the callback function and greeting when called inside processUserInput is a helper function.

**Anonymus functions**
: functions without a variable name. Usually declared in the argument of a function call

## Types of Event Handling

**Event Bubbling**
: This is what we will use - we listen to the larger (parent) element so we can "hear" the smaller pieces that are clicked

**Event Capturing**
: the opposite. Event is captured on the outer element and propogated to the inner elements.

### DOM Level 2 Event Handlers: DO THIS

```js
let element = document.getElementById('elementId');

function functionName() {
  // code that runs when event is fired
}

// click in the code below is the type of event.
element.addEventListener('click', functionName);
```

2 Paraments:

- the event as a string
- a callback fucntion
