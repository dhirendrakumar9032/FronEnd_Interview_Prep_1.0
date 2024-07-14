## 1: What is memory leakage in React components?

Memory leakage in React components occurs when a program retains memory that is no longer needed, which can lead to increased memory usage and decreased performance over time. This happens when references to objects are kept even after they are no longer required, preventing the JavaScript garbage collector from reclaiming the memory.

#### Causes of Memory Leakage in React Components:
__1. Uncleared Timers and Intervals:__

Forgetting to clear timers and intervals using clearTimeout or clearInterval can cause memory leaks.
```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    // Some logic
  }, 1000);

  return () => clearTimeout(timer); // Cleanup the timer
}, []);
```
__2. Unsubscribed Event Listeners:__

Not removing event listeners when a component unmounts can keep references to DOM elements or other objects.
```javascript
useEffect(() => {
  const handleResize = () => {
    // Resize logic
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup the event listener
  };
}, []);
```
__3. Unfinished Network Requests:__

Continuing to update state or perform actions after a component has unmounted can lead to memory leaks.
```javascript
useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) {
      setState(data);
    }
  });

  return () => {
    isMounted = false; // Prevent state update if unmounted
  };
}, []);

```


## 2: What strategies would you employ to reduce memory leaks in a Single Page Application (SPA) built with React?
    Reducing memory leaks in a Single Page Application (SPA) built with React involves several strategies to ensure that components are properly managed and resources are released when they are no longer needed. Here are some effective strategies:

#### 1. Properly Clean Up Effects
Ensure that you clean up any side effects in your components. This includes canceling network requests, removing event listeners, and clearing timers. Use the cleanup function of the useEffect hook for this purpose.

```js
useEffect(() => {
  const timer = setTimeout(() => {
    // Some logic
  }, 1000);

  return () => clearTimeout(timer); // Cleanup the timer
}, []);
```
 #### 2. Avoid Memory Leaks with Subscriptions
When using subscriptions or event listeners, make sure to unsubscribe or remove the listener in the cleanup function.

```javascript

useEffect(() => {
  const handleResize = () => {
    // Resize logic
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup the event listener
  };
}, []);
```

#### 3. Optimize Component Lifecycle
Ensure components are properly unmounted and that state updates do not occur on unmounted components. You can use a let isMounted flag to prevent state updates after unmounting.

```js
useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) {
      setState(data);
    }
  });

  return () => {
    isMounted = false; // Prevent state update if unmounted
  };
}, []);
```

## what are the synthetic events in react?

Synthetic events in React are a cross-browser wrapper that ensures events, like clicks and keypresses, work consistently across all browsers.


```js
import React, from 'react';

export function App() {

const hanldeAdd=(e)=>{
  //this will log sysnthetic events object
  console.log(e)
}

  return (
    <div className='App'>
   <button onClick={hanldeAdd}>Change </button>
    </div>
  );
}
```

## what are the Perfomance Optimization techniques in react?

### 1. Memoization and Caching
__React.memo:__ Wrap functional components to prevent unnecessary re-renders when props have not changed.

__useMemo:__ Memoize expensive calculations to avoid recomputing them on every render.

__useCallback:__ Memoize callback functions to prevent unnecessary re-renders of child components.

### 2. Avoiding Reconciliation

__Key Props:__ Use stable and unique keys for list items to help React identify which items have changed.

### 3. Efficient State Management
__Local State:__ Keep state as close to where it’s needed as possible. Avoid lifting state up unnecessarily.

__State Libraries:__ Use optimized state management libraries like Zustand or Recoil which have better performance characteristics for certain use cases.

### 4. Code Splitting and Lazy Loading
__React.lazy:__ Use React.lazy and Suspense to load components lazily, reducing the initial bundle size.
__Dynamic Imports:__ Split code at the route level or component level using dynamic imports.

### 6. Optimize Component Mounting and Updating
__useEffect Cleanup:__ Clean up effects to prevent memory leaks and unnecessary operations.

__Dependencies:__ Properly specify dependencies in useEffect to avoid unnecessary re-runs.

### 8. Server-Side Rendering (SSR)
Use SSR with frameworks like Next.js to improve initial load times and SEO by rendering pages on the server.

### 9. Asset Optimization
__Image Optimization:__ Use optimized image formats, responsive images, and lazy loading for images.

__Minification and Compression:__ Minify JavaScript, CSS, and HTML. Use Gzip or Brotli for compression.

__CDN:__ Serve static assets via a CDN to reduce load times.

### 13. Handling Expensive Calculations
__Web Workers:__ Offload expensive calculations to web workers to keep the main thread free.

__Throttling/Debouncing:__ Use throttling or debouncing for event handlers that trigger frequent updates, such as scroll or resize events.

### 12. Avoiding Inline Styles
Use CSS classes instead of inline styles to reduce re-renders caused by new style objects.