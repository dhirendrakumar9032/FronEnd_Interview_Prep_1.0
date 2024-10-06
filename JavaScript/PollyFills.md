
## 1. What are polyfills in JavaScript, and can you provide a clear definition along with a simple example?

- **Polyfills** are pieces of code (usually JavaScript on the web) that implement features on web browsers that do not support those features natively. Polyfills allow developers to use modern functionality in older browsers by mimicking the behavior of a newer API in JavaScript, ensuring that an application works uniformly across different environments.

### Simple Example:
Suppose newer browsers support a method called `Array.prototype.includes`, which checks if an array contains a certain value. Older browsers might not support this method. To ensure that your code works across all browsers, you can create a polyfill for `Array.prototype.includes` like this:

```javascript
if (!Array.prototype.includes) {
  // Adding the includes method if it's not natively available
  Array.prototype.includes = function(searchElement) {
    // 'this' refers to the array
    for (var i = 0; i < this.length; i++) {
      if (this[i] === searchElement) return true;
    }
    return false;
  };
}

// Example usage:
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana'));  // Output: true
console.log(fruits.includes('orange'));  // Output: false
```

In this polyfill:
- We first check if `Array.prototype.includes` does not exist.
- If it doesn’t, we define it.
- The method we define checks each element of the array to see if it matches the `searchElement`.
- If a match is found, it returns `true`; if no match is found by the end of the array, it returns `false`.

This way, older browsers that do not have the `includes` method natively can still use it through the polyfill, allowing developers to write modern JavaScript code without worrying about browser compatibility.


## 2. Write a pollyfill for array.map()?

```js
    if (!Array.prototype.simpleMap) {
    Array.prototype.simpleMap = function (callback) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
        }

        return result;
    };
    }

    const numbers = [1, 2, 3, 4];
    const doubled = numbers.simpleMap((x, i, arr) => {
    console.log(i, arr);
    return x * 2;
    });
    console.log(doubled); // Output: [2, 4, 6, 8]
```

## 2. Write PollyFill for array.reduce?

```js
    if (!Array.prototype.myreduce) {
    Array.prototype.myreduce = function (callback, initial = 0) {
        let acc = initial;

        for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
        }

        return acc;
    };
    }

    const num = [1, 2, 3, 4, 5];
    let res = num.myreduce(function (a, b) {
    return a + b;
    }, 0);
    console.log(res);  // Outputs: 15
```

## 3. Write pollyfill for array.forEach?

```js
   if(!Array.prototype.forEvery){ 
    Array.prototype.forEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    };}

    const num = [1, 2, 3, 4];

    num.forEvery((item, i, arr) => {
    console.log(item, i, arr);
    });
```