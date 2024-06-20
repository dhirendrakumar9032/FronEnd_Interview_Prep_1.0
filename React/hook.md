## 1. What is 'useReducer' why we use them? Or can we replace State with useReducer?
   _`useReducer` is used when the state has complex logic that involves multiple sub-values or when the next state depends on the previous one. We avoid using `useState` in such cases._

 #### Example Using `useState`:

```js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
```

#### Exmplae Using `useReducer`

   ```js
   import React, { useReducer } from 'react';

// Define the initial state of the counter
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;

```
---

## 2. Why we use `useRef`? or How to store the previous state in react? How we can interact with DOM elements witout re-rendering?

### 1. `useRef` Hook to Store Previous State

_The `useRef` hook can be used to store the previous state of a component. This allows you to compare the current state with the previous state without causing a re-render._

#### Example: Tracking Previous State Value

```js
import React, { useState, useRef, useEffect } from 'react';

const PreviousStateExample = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // Update the ref with the current count after rendering
    prevCountRef.current = count;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default PreviousStateExample;

```

### 2. `useRef` Hook to Interact with DOM Elements

_The `useRef` hook can also be used to directly interact with DOM elements without causing re-renders. This is useful for manipulating elements, such as focusing an input field or scrolling to a specific position._

### Example: Focusing an Input Field

```js
import React, { useRef } from 'react';

const FocusInputExample = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInputExample;

```

## 3. Why use `useMemo` Hook? What is the purpose of using `useMemo` hook?

_The useMemo hook in React is used to memoize a computed value so that it is only recalculated when one of its dependencies changes. This can improve the performance of a React application by avoiding unnecessary recalculations of expensive functions._

#### Needs of useMemo
**1.Performance Optimization:** useMemo helps in optimizing performance by memoizing expensive calculations. It ensures that these calculations are only performed when necessary, thus reducing the computational load.

**Avoid Unnecessary Re-renders:** It prevents unnecessary recalculations and re-renders of components that depend on computed values, ensuring a smoother and more efficient UI.

**Consistency:** It ensures that the computed value remains consistent as long as the dependencies do not change.

```js
import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000; i++) {} 
    return num * 2;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);
//   const calculatedValue = expensiveCalculation(count);
  

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ExpensiveCalculationComponent;

```

_**Note:**_ if we memoize the expensiveCalculation fn then it we be run when its dependecies are changed. Like if we do not memoize then that run every re-render of the page.