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