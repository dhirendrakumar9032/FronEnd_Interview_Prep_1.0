
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


