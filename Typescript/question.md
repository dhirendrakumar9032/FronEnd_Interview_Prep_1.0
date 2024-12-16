## 1. What is differences between Type and Interface in TypeScript

- Both `type` aliases and `interface` declarations in TypeScript are used to define the structure of objects and functions. However, they have several key differences:

- **Declaration Merging**: Unlike `type` aliases, interfaces can be declared multiple times with the same name and will be treated as a single interface during compilation. This feature is known as declaration merging.
- **Extensibility**: Interfaces are explicitly designed to be mutable and can be extended using the `extends` keyword. Type aliases are immutable once defined.
- **Use in Union and Intersection Types**: Type aliases can be used to create union or intersection types, which is not possible directly with interfaces.

Here are additional differences:
- **Type aliases can define tuples and mapped types**, which interfaces cannot.
- **Interfaces are more suited for object-oriented programming** since they can more easily represent a contract for class implementations.

These differences can influence whether `type` aliases or `interfaces` are more appropriate for certain programming scenarios in TypeScript.

## 2. What is genric function in typescript.

- A generic function in TypeScript allows you to write a function that can work with any data type.

```ts
function identity<T>(arg: T): T {
    return arg;
}

// Usage:
let output1 = identity<string>("myString");  // type inferred as string
let output2 = identity<number>(100);         // type inferred as number


```
## 3. What is the as const assertion in TypeScript?

- The as const assertion in TypeScript is used to indicate that a variable should be treated as a constant with the narrowest possible type. This assertion converts literals to immutable and read-only types, ensuring that their values cannot be changed.

```ts 
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
} as const;

// config.timeout=3000 will through error at the time od compilation 

```