## What the Events?

- In JavaScript, events are actions or occurrences that happen in the browser that can be detected and handled. Events are usually triggered by the user or the browser itself. Some common types of events include:

- Mouse Events : clcik, double click, mouseUp ect
- Keyboard Events: keyUp, KeyDown etc
- Touch events: touchStart touchEnd ect
- Window Events: scroll, resize etc
- form events: change, submit etc


## What is Event Propogation?

- **Event propagation** in JavaScript refers to the way events travel through the DOM (Document Object Model) tree when an event is fired. It consists of three phases:

### 1. **Capturing Phase** (Event Capture):
   - The event starts from the top of the DOM tree (the `window` object) and travels down to the target element.
   - The event listeners in this phase can be set using `{ capture: true }` in `addEventListener`.

### 2. **Target Phase**:
   - The event reaches the target element (the element that was clicked or interacted with).
   - This is the phase where the event is triggered directly on the target.

### 3. **Bubbling Phase** (Event Bubbling):
   - After reaching the target, the event bubbles back up the DOM tree from the target element to the root (`window`).
   - By default, most events bubble unless specified otherwise.

   ulElement = document.getElementById('list');
```js
liElement = document.querySelector('#list li');
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );
```

- Now try clicking on the first `<li>` element in the list. There should be a message in the console saying “Clicked on li" because this was the target element. The event then bubbles up to the parent `<ul>` element and displays a message in the console saying “Clicked on ul”. The event will continue to bubble all the way to the root HTML element, but nothing will happen because none of the other elements had event listeners attached to them.

### Example of Event Propagation:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  // Parent event listener (will trigger during the bubbling phase)
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });

  // Child event listener (will trigger first because it's the target)
  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
```

### **Propagation Phases**:

1. **Event Capture**: The event moves from `window` down to the `child`.
2. **Target**: The event fires on the `child` element.
3. **Event Bubbling**: The event bubbles up from the `child` to the `parent`.

In the above example, when you click the button, the output will be:
```
Child clicked
Parent clicked
```

### Stopping Event Propagation:
- **`event.stopPropagation()`**: Stops the event from bubbling up or capturing further in the DOM tree.
- **`event.stopImmediatePropagation()`**: Stops the event from propagating and prevents any other listeners of the same event from being called.

### Example of Stopping Propagation:

```js
document.getElementById('child').addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the event from reaching the parent
  console.log('Child clicked');
});
```

In this case, only "Child clicked" will be logged, and the parent will not respond to the event due to propagation being stopped.