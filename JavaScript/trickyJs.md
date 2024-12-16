## 1 Create a count function like this-

```js

 count() //0
 count() //1
 count() //2

 count().reset()

 count() //0
 count() //1
 count() //2


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

    const object = {
    reset() {
        this.counter = 0;
    },
    };

    count();
    count();
    count();
    count.reset();
    count();
    count();

```

## 2 Create funtion like mulBy(3)(4)(5)(1)

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

## 2. Create funtion like addBy(3)(4)(5)(1);

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