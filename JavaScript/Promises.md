## What are the promises in javascript?
A JavaScript Promise is an object that handles the outcome of an asynchronous operation, either success or failure.

A Promise in JavaScript can be in one of three states:

1. **Pending**: The initial state of a promise. The operation associated with the promise has not yet completed, and the promise is waiting for a resolution or rejection.

2. **Fulfilled**: The state of a promise representing a successful completion. When a promise is fulfilled, it means the asynchronous operation has completed successfully, and the promise now has a resolved value.

3. **Rejected**: The state of a promise representing a failure or error. If the asynchronous operation fails or throws an error, the promise is rejected and will hold a reason or error message explaining why the operation failed.

```js
function createPromise(status, message, delay) {
  return new Promise((res, rej) => {
    if (status) {
      setTimeout(() => {
        res(`${message} is successful!`);
      }, delay);
    } else {
      rej(`${message} failed!`);
    }
  });
}

const promise1 = createPromise(true, 'Api 1', 1000);
const promise2 = createPromise(false, 'Api 2', 500);
const promise3 = createPromise(true, 'Api 3', 300);

// Executes all promises and rejects if any one of them rejects
Promise.all([promise1, promise2, promise3])
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Returns the result of the first promise to settle (resolve or reject)
Promise.race([promise1, promise2, promise3])
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Resolves as soon as any of the promises resolves, ignores all rejections unless all promises reject
Promise.any([promise1, promise2, promise3])
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Returns the results of all promises, whether they resolved or rejected
Promise.allSettled([promise1, promise2, promise3])
  .then(data => console.log(data))
  .catch(err => console.log(err));


```

## What is Callback Hell and How it can be overcome with promises?

 A callback is simply a function that is passed as an argument to another function and is intended to be executed at a later time or after a specific event occurs.

 __Callback hell__ is introduced when we have nested functions. This is a requirement in almost all real world applications.


```js
function asyncFunction1(callback) {
  setTimeout(() => {
    console.log("Async Function 1 Done");
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log("Async Function 2 Done");
    callback();
  }, 1000);
}

function asyncFunction3(callback) {
  setTimeout(() => {
    console.log("Async Function 3 Done");
    callback();
  }, 1000);
}

asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log("All Async Functions Completed");
    });
  });
});

```

This Callback hell can overcome with promises like this and this called __promise chaining__.

```js
function runAsyncOperation(message, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, duration);
  });
}

// Use the generic function to run each asynchronous operation
runAsyncOperation("Async Function 1 Done", 1000)
  .then(() => runAsyncOperation("Async Function 2 Done", 1000))
  .then(() => runAsyncOperation("Async Function 3 Done", 1000))
  .then(() => {
    console.log("All Async Functions Completed");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });


```

## What is async/await in javascript and why we use?
"async and await make promises easier to write".

- async makes a function return a Promise

- await makes a function wait for a Promise

```js
const promise = new Promise(res => {
  setTimeout(() => {
    res('Api called');
  }, 2000);
});

async function print() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
print(); //Api called
```

//We can resolve above promise chaining using async/await like this

```js
function runAsyncOperation(message, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, duration);
  });
}

async function performOperations() {
  try {
    await runAsyncOperation("Async Function 1 Done", 1000);
    await runAsyncOperation("Async Function 2 Done", 1000);
    await runAsyncOperation("Async Function 3 Done", 1000);
    console.log("All Async Functions Completed");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

performOperations();

```