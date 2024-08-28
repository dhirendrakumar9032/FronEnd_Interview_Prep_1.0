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

## what is function borrowing in JavaScript?

Function borrowing is a technique in JavaScript where a method from one object is used in the context of another object. This is typically done using the call, apply, or bind methods.
You can think of function borrowing as an alternative approach to inheriting properties or methods from one object to another. 

### Using call and apply
Both call and apply allow you to borrow a function and invoke it immediately. The main difference between them is how they handle arguments:

__call:__ Takes arguments separately.

__apply:__ Takes arguments as an array.

```js
// call 

const person = {
  fullName: function(city, country) {
     return this.firstName + " " + this.lastName + ", " + city + ", " + 
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName.call(person1,'Lucknow','India')); // "John Doe, Lucnow, India"

console.log(person.fullName.call(person1,'Hyderabad','India')); ; // Jane Smith, Hyderabad, India"

```

```js

// apply

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName.apply(person1, ["New York", "USA"])); // "John Doe, New York, USA"
console.log(person.fullName.apply(person2, ["Los Angeles", "USA"])); // "Jane Smith, Los Angeles, USA"

```

### Bind 
The bind method creates a new function that, when called, has its this value set to the provided value. It does not invoke the function immediately; instead, it returns a new function that you can call later.

```js

// bind

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};

const fullNameForPerson1 = person.fullName.bind(person1);
const fullNameForPerson2 = person.fullName.bind(person2);

console.log(fullNameForPerson1()); // "John Doe"
console.log(fullNameForPerson2()); // "Jane Smith"
```

## What is currying function in JavaScript?
Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows functions to be more reusable and composable.

```js

// without

function add(a, b) {
  return a + b;
}

// with
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = curriedAdd(5);
console.log(add5(10)); // 15
```