## 1. What are the ways to import CSS into an HTML file?
 
 There are several ways to import CSS into an HTML file. Here are the most common methods:

 ### Inline CSS:
 Inline CSS involves using the style attribute directly within an HTML element. This method applies styles to a single element.

 ```html
 <body>
  <h1 style="color: blue; text-align: center;">This is an inline styled heading</h1>
</body>
```
### Internal CSS:

Internal CSS involves using the style tag within the head section of the HTML document. This method applies styles to the entire document.

```html
<style>
    body {
      background-color: lightgrey;
    }
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
  ```

  ### External CSS:

  External CSS involves linking to an external CSS file using the link tag within the head section of the HTML document. This method applies styles to multiple HTML documents.

  ```html
  <head>
  <title>External CSS Example</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

### Importing CSS using @import

The @import rule allows you to import one CSS file into another. This method is used within a CSS file and can help in organizing styles.

```css
/* main.css */
@import url('styles.css');

body {
  background-color: lightgrey;
}
h1 {
  color: blue;
  text-align: center;
}
```


## 2. What are the ways to import javascript into an HTML file?

### Inline JavaScript

We can write inline JavaScript into the html tag

```html
<button onClick="alert('Hello, world!')">Click me</button>
```

### Internal JavaScript

To write internal JavaScript we can place all JavaScript code inside the script tag

```html
 <script>
    function showAlert() {
      alert('Hello, world!');
    }
  </script>
  ```

  ### External Javascript

  External JavaScript involves linking to an external JavaScript file using the script tag with the src attribute. This method allows for the reuse of JavaScript code across multiple HTML documents.

  ```html
  <!DOCTYPE html>
<html>
<head>
  <title>External JavaScript Example</title>
  <script src="script.js"></script>
</head>
<body>
  <button onclick="showAlert()">Click me</button>
</body>
</html>
```
```javascript
//script.js
function showAlert() {
  alert('Hello, world!');
}
```
