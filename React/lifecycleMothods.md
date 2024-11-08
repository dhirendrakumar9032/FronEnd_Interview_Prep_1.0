## What are the lifecycle methods of a component, and how are these lifecycle methods used in functional components?

- In class components, lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` handle different stages of a component's life. 

**Hooks in Functional Components**:
- `useEffect()` replaces these lifecycle methods:
  - **`componentDidMount`**: `useEffect(() => { /* logic */ }, []);`
  - **`componentDidUpdate`**: `useEffect(() => { /* logic */ }, [dependencies]);`
  - **`componentWillUnmount`**: `useEffect(() => { return () => { /* cleanup */ }; }, []);`

Hooks offer a simpler way to manage side effects and lifecycle behavior in functional components.

```js
import React, { useEffect } from 'react';

function MyComponent() {
  // Mimicking componentDidMount
  useEffect(() => {
    console.log('Component mounted');

    // Mimicking componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Mimicking componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
  }, [/* dependencies */]);

  return <div>My Component</div>;
}

```