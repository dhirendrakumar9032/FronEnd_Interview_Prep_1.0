## Tricy Questions

| Question | Link |
|----------|------|
| Q.1 Create a count function like this. | [Go to Answer 1](#answer-1) |
| Q.2 Create a function like `mulBy(3)(4)(5)(1)()`. Output: 60 | [Go to Answer 2](#answer-2) |
| Q.3 Create a function like `addBy(3)(4)(5)(1)`. Output: 13 | [Go to Answer 3](#answer-3) |
| Q.4 Write function like this | [Go to Answer 4](#answer-4) |
| Q.5 Write throttle function | [Go to Answer 5](#answer-5) |
| Q.6 Write debounce function | [Go to Answer 6](#answer-6) |





### Answer 1

```js

    //count();
    // count();
    // count();
    // count.reset();
    // count();
    // count();

 // Answeer is -

    const count = (() => {
    let counter = 0;
    function inner() {
        console.log(counter);
        return counter++;
    }

    inner.reset = function () {
        counter = 0;
    };
    return inner;
    })();

    count();
    count();
    count();
    count.reset();
    count();
    count();

```
### Answer 2

```js

console.log(mulBy(3)(4)(5)(1)());

function mulBy(x) {
  return function inner(y) {
    if (!y) {
      return x;
    }
    x *= y;

    return inner;
  };
}

```

### Answer 3

```js

console.log(+addBy(3)(4)(5)(1));

function addBy(x) {
  let sum = x;
  function inner(y) {
    sum += y;
    return inner;
  }
  inner.valueOf = function () {
    return sum;
  };
  return inner;
}
```

### Answer 4

```js

// curriedJoin(1)(2, 3)'1,2,3' // curriedJoin(1, 2)(3)'1_2_3'


const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2)(3));

function curry(callback) {
  return function (a, b) {
    if (b !== undefined) {
      return function (c) {
        return callback(a, b, c);
      };
    }

    return function (b, c) {
      if (c !== undefined) {
        return callback(a, b, c);
      }

      return function (c) {
        return callback(a, b, c);
      };
    };
  };
}
```

### Answer 5

```js

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

function print(str) {
  console.log(str);
}

const throttledPrint = throttle(print, 2000);
throttledPrint('Hello, throttled world!1');
throttledPrint('Hello, throttled world!2');
throttledPrint('Hello, throttled world!3');

```

### Answer 6

```js

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId) clearInterval(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function print(str) {
  console.log(str);
}

const debouncing = debounce(print, 2000);

debouncing('Hello1');
debouncing('Hello2');
debouncing('Hello3');


```
