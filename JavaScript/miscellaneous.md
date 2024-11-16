## what is Lexical scope and Scope Chain?

#### Lexical Scope

- Lexical scope is the scope defined by the physical placement of the code in the source file. In JavaScript, a function's scope is determined by where the function is written in the code, meaning that a function has access to variables declared in its outer (parent) scopes.

**Example**:
```javascript
function outerFunction() {
  const outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accessible because of lexical scope
  }

  innerFunction();
}

outerFunction();
```
- In this example, `innerFunction` has access to `outerVariable` because of lexical scoping. The variable `outerVariable` is available within `innerFunction` since `innerFunction` is defined inside `outerFunction`.

---

#### Scope Chain

-The Scope Chain is the mechanism that JavaScript uses to resolve variable access. When a variable is referenced, JavaScript starts searching for that variable in the current scope. If it does not find it, it goes up to the outer scope, continuing until it either finds the variable or reaches the global scope.

**Example**:
```javascript
const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am from outer function";

  function innerFunction() {
    const innerVar = "I am from inner function";
    console.log(innerVar);  // Found in innerFunction scope
    console.log(outerVar);  // Found in outerFunction scope
    console.log(globalVar); // Found in global scope
  }

  innerFunction();
}

outerFunction();
```
- **Scope Chain in this example**: The `innerFunction` first searches for `innerVar` in its own scope. If it's not found, it checks the `outerFunction` scope, and if still not found, it looks in the global scope.
- Here, JavaScript uses the **scope chain** to resolve the variables `innerVar`, `outerVar`, and `globalVar`.

### Summary
- **Lexical Scope**: Determines which variables are accessible by a function based on where the function is defined in the code.
- **Scope Chain**: The chain of scopes used to look up variables, moving from the current scope to outer scopes until the global scope is reached.

##

## What is the difference between `let`, `const`, and `var` in JavaScript?

1. **Scope**:
   - **`var`**: Has **function scope**. It is only scoped to the function in which it is declared. If declared outside a function, it becomes a global variable.
   - **`let` and `const`**: Have **block scope**. They are only accessible within the block `{}` in which they are defined.

   **Example**:
   ```javascript
   function example() {
     if (true) {
       var x = 10;  // Function scoped
       let y = 20;  // Block scoped
       const z = 30; // Block scoped
     }
     console.log(x); // 10
     console.log(y); // Error: y is not defined
     console.log(z); // Error: z is not defined
   }
   example();
   ```

2. **Re-declaration**:
   - **`var`**: Can be re-declared and updated within the same scope.
   - **`let`**: Cannot be re-declared within the same scope but can be updated.
   - **`const`**: Cannot be re-declared or updated (it must be assigned a value when declared).

   **Example**:
   ```javascript
   var a = 5;
   var a = 10; // Re-declaration is allowed

   let b = 5;
   // let b = 10; // Error: Identifier 'b' has already been declared

   const c = 5;
   // c = 10; // Error: Assignment to constant variable
   ```

3. **Hoisting**:
   - **`var`**: Variables declared with `var` are **hoisted** to the top of their scope and initialized with `undefined`.
   - **`let` and `const`**: Are also hoisted but are not initialized. They are in a **"temporal dead zone"** until the declaration is encountered.

   **Example**:
   ```javascript
   console.log(a); // undefined
   var a = 5;

   // console.log(b); // Error: Cannot access 'b' before initialization
   let b = 10;
   ```

### Summary:
- **`var`**: Function-scoped, can be re-declared, hoisted with `undefined`.
- **`let`**: Block-scoped, cannot be re-declared in the same scope, hoisted but in a "temporal dead zone."
- **`const`**: Block-scoped, cannot be re-declared or updated, hoisted but in a "temporal dead zone."