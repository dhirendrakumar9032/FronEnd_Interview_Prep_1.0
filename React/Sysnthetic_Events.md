## what are the synthetic events in react?

- Synthetic events in React are a cross-browser wrapper that ensures events, like clicks and keypresses, work consistently across all browsers.


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