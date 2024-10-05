## What is React Strict Mode? Why we use that?

- React's Strict Mode is a development tool that helps identify potential issues in your React app. It doesn't affect production but highlights problems like unsafe lifecycle methods, legacy API usage, and side-effects in components. Just like `<Fragment>`, `<StrictMode>` does not render any extra DOM elements.

**Why we use it**:  
- To detect unexpected side-effects
- To ensure best practices
- To catch potential bugs early
- Deprecated or unsafe lifecycle methods
- Duplicate keys in lists

**Enabling Strict Mode**:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

**Enabling strict mode for a part of the app**:

```jsx
import { StrictMode } from 'react';

function App() {
  return (
    <>
      <Header />
      <StrictMode>
        <main>
          <Sidebar />
          <Content />
        </main>
      </StrictMode>
      <Footer />
    </>
  );
}
```
- In this instance, Strict Mode checks will not run against the Header and Footer components. But, they will run on Sidebar and Content, as well as all of the components inside them, no matter how deep it is..

- Strict Mode affects only the development environment and has no impact on production builds. It enables extra checks and warnings to help catch potential issues, but these won't be present in the final version of your app. It may slightly slow down development for debugging purposes.
