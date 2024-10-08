## 1

```js

 //Create a count function 

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