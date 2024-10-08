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
dfd
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


## 3 How to HTML file render to the brawaser?

When a `<script>` tag is placed in the `<head>` of an HTML document without using the `defer` or `async` attributes, it affects the page loading process in a specific way. Here’s a detailed look at what happens in this scenario:

### 1. **HTML Parsing Begins**
The browser starts parsing the HTML document from top to bottom. When it encounters any element, such as a `<link>` or `<meta>`, it processes them accordingly.

### 2. **Script Tag Encountered**
When the parser reaches the `<script>` tag in the `<head>`:
- **Downloading:** The browser immediately stops parsing the HTML document and starts downloading the script file. This halt in parsing is necessary because the script might contain code that modifies the DOM structure or CSSOM, and hence, the browser needs to ensure it has the latest script content before continuing.
- **Execution:** After the script is downloaded, it is executed. The HTML parsing remains paused during both the download and execution phases.

### 3. **Parsing Resumes**
Once the script has been executed, the browser resumes the HTML parsing where it left off. If there are more scripts, images, stylesheets, or other resources ahead, it will handle each as it comes across them.

### 4. **Implications of Blocking Scripts**
- **Rendering Delay:** Because the script blocks the parsing of HTML, it can delay the rendering of the page. This delay occurs because the browser must complete the script execution to continue parsing the rest of the HTML, which could include visible content and layout information.
- **Performance Impact:** If the script is large or the server response is slow, the impact on performance can be significant. The user might see a blank screen or incomplete page for a longer duration, affecting the perceived load time negatively.

### Example
Here’s an example of how this might look in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="heavy-script.js"></script> <!-- No defer or async; this blocks parsing -->
</head>
<body>
    <h1>Hello, World!</h1> <!-- This waits until the script is completely loaded and executed -->
</body>
</html>
```

In this example, the `<h1>` tag and any other content below the `<script>` tag will not be processed or rendered until `heavy-script.js` is completely downloaded and executed.




## 4 Where to place Script tag in HTML file is best practice?

Best Practice: Place your `<script>` tag at the end of the `<body>` section, just before the closing `</body>` tag. This ensures that the HTML content loads first, making your webpage display faster and ensuring all elements are available for JavaScript to interact with.

Why This Is Important

### Faster Page Load:

If the browser encounters a `<script>` tag in the `<head>`, it stops loading the rest of the HTML to download and run the script. This can delay the page content from showing up.
By placing the script at the end of the `<body>`, the browser first loads and displays the content, making the page appear faster.
Access to All Elements:

JavaScript often interacts with HTML elements (e.g., buttons, forms). If the script runs before these elements are loaded, it can't find and manipulate them.
Placing the script at the end ensures all elements are loaded and ready to be manipulated.

## 5 what is deger and ascync and how the are differ?

### defer:

Use for scripts that need the whole DOM to be ready before executing.
Suitable for scripts that must run in a specific order.
Ideal for scripts that do not need to block the HTML parsing.

### async:

Use for independent scripts that do not rely on the DOM or other scripts.
Suitable for analytics, ads, or any script that can run independently.
Ideal for improving page load times by not blocking HTML parsing.


## 6. Why do we use symentic tag?

Semantic tags in HTML provide meaningful structure to web pages by describing the content they contain. Their use offers several key benefits:

__1. Improved Accessibility:__ Semantic tags enhance accessibility for users relying on assistive technologies such as screen readers. These tools can interpret and navigate the content more effectively when it is marked up semantically.

__2. SEO Benefits:__ Search engines leverage semantic tags to better understand and index the content of a webpage. Proper use of these tags can improve a site's search engine ranking by providing clearer context about the content.

__3. Enhanced Readability for Developers:__ Using semantic tags makes HTML code more readable and easier to understand. Developers can quickly identify the purpose of different sections of the page, such as headers, navigation, main content, and footers.

__4. Consistency and Standardization:__ Semantic tags promote a standardized approach to web development, which is recognized and understood universally by developers. This consistency can lead to better collaboration and maintainability.

__5. Improved Maintainability:__ With a clear structure provided by semantic tags, the codebase becomes easier to maintain. Updates and changes can be made more efficiently, as the roles of different sections are well-defined.

__6. Separation of Concerns:__ Semantic tags help separate content from design. This separation allows developers to apply styles using CSS and dynamic behaviors using JavaScript more effectively, leading to a more maintainable and scalable codebase.


## 7. What are symentic tag and non symentic tag?

Semantic tags are elements in HTML that clearly describe their meaning both to the browser and the developer. Examples include `<article>`, `<footer>`, `<header>`, `<nav>`, and `<section>`, which indicate the role or purpose of the content they enclose.

Non-semantic tags, on the other hand, don't provide any information about the content inside them. Common examples are `<div>` and `<span>`, which serve purely as containers without conveying any meaning about their content. They are used when no other semantic element is appropriate and are often used for styling or as hooks for JavaScript.

## 8. what are attributes in html?
Attributes in HTML provide additional information about HTML elements. They are always included in the opening tag and typically come in name/value pairs like name="value". 

```html
<element attribute="value">Content</element>
```

Common Attributes: Many attributes are commonly used across different elements.

__id:__ Uniquely identifies an element within a document.
```html
<div id="header">This is a header.</div>
```
__class:__ Specifies one or more class names for an element, used for CSS and JavaScript.
```html
<p class="intro">This is an introductory paragraph.</p>
```
__style:__ Provides inline CSS styles for an element.
```html
<p style="color:blue;">This text is blue.</p>
```

## 9. What is the purpose of the `<!DOCTYPE>` declaration in HTML?

The `<!DOCTYPE>` declaration tells the web browser which version of HTML the page is written in, ensuring it renders the page correctly. Without it, the browser might display the page improperly by falling back to an outdated rendering mode. For HTML5, it's written as `<!DOCTYPE html>`.

## 10. What are all the inline and block elements in HTML?

Here's a list of commonly used inline and block elements in HTML:

**Inline Elements:**
- `<a>`: Anchor tag for hyperlinks.
- `<span>`: Generic inline container.
- `<img>`: Image element.
- `<input>`: Input field.
- `<label>`: Label for an input element.
- `<b>`: Bold text.
- `<i>`: Italic text.
- `<em>`: Emphasized text.
- `<strong>`: Strong importance text.
- `<br>`: Line break.
- `<small>`: Smaller text.
- `<sub>`: Subscript.
- `<sup>`: Superscript.
- `<button>`: Clickable button.

**Block Elements:**
- `<div>`: Generic container for flow content.
- `<p>`: Paragraph.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Heading levels.
- `<ul>`: Unordered list.
- `<ol>`: Ordered list.
- `<li>`: List item.
- `<table>`: Table element.
- `<header>`: Section header.
- `<footer>`: Section footer.
- `<section>`: Section of a document.
- `<article>`: Independent, self-contained composition.
- `<nav>`: Navigation links.
- `<aside>`: Sidebar for tangentially related content.
- `<blockquote>`: Block quotation.
- `<form>`: Form for user input.

## 11. Can we use custom tags in HTML, and how do they work similarly to standard tags like `<span>` or `<div>`?

- Yes, you can use custom tags in HTML. Browsers treat unrecognized tags as inline elements, similar to `<span>`, until styled with CSS.