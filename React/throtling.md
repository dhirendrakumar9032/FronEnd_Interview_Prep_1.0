## what is Throttling? why we use that.
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

```js 
import React, { useState, useEffect } from 'react';

// Throttle function without using apply
const throttle = (fn, limit) => {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      fn(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          fn(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

// Function to simulate an API call
const callApi = (query) => {
  console.log(`Calling API with query: ${query}`);
};

const App = () => {
  const [query, setQuery] = useState('');

  // Throttled version of the API call function
  const throttledCallApi = throttle(callApi, 1000);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query) {
      throttledCallApi(query);
    }
  }, [query, throttledCallApi]);

  return (
    <div className="App">
      <h1>Search Input with Throttling</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default App;
```