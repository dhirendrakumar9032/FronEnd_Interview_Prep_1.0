## what is Closuer in js?
Closures in JavaScript occur when a function is able to remember and access its lexical scope, even when that function is executing outside its lexical scope. or

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain. A closure gives you access to an outer function’s scope from an inner function.

```js
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

```