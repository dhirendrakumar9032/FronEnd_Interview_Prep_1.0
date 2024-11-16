## 1. what is Specificity in css?

 Specificity determines which styles are applied when multiple rules could apply to the same element.

 #### Order of Specificity:

1. Inline Style
2. ID Selector
3. Class Selector, Attribute Selector, Pseudo-class Selector
4. Type Selector, Pseudo-element Selector
5. Universal Selector


## 2. What is the difference between `position: fixed` and `position: sticky` in CSS?

In CSS, `position: fixed` makes an element stay in the same place relative to the viewport, meaning it doesn't move when you scroll. It's removed from the normal document flow, so it doesn't affect the position of other elements.

`position: sticky`, on the other hand, keeps an element in place as you scroll until a specified point is reached, and then it behaves like a fixed element. It starts behaving like a normal element again once the scrolling reverses past that specified point. It stays within the flow of the document, unlike fixed positioning.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Fixed vs Sticky Position Example</title>
        <link rel="stylesheet" href="src/style.css" />
    </head>
    <body>
        <div class="header">Header</div>
        <div class="fixed-box">Fixed Box</div>
        <div class="sticky-box">Sticky Navigation</div>
        <div class="content">Scroll down...</div>
        <div class="more-content">More Content Here...</div>
        <div class="footer">Footer</div>
    </body>
    </html>
```
```css
    body,
    html {
    margin: 0;
    font-family: Arial, sans-serif;
    height: 300%;
    }

    .header {
    padding: 20px;
    background-color: #fdd;
    text-align: center;
    }
    .fixed-box {
    position: fixed;
    bottom: 40px;
    right: 20px;
    padding: 10px;
    background-color: #f77;
    color: white;
    }

    .sticky-box {
    position: sticky;
    top: 0; /* Stick to the top of the viewport */
    background-color: #ddf;
    padding: 15px;
    text-align: center;
    }

    .content,
    .more-content {
    padding: 50px;
    text-align: center;
    background-color: #ffd;
    margin: 20px 0;
    }

    .footer {
    padding: 20px;
    background-color: #dfd;
    text-align: center;
    }
```

## What is the difference between absolute and relative positioning in CSS?**

### Answer:
**Absolute Positioning:**
- An element with `position: absolute` is removed from the normal document flow.
- It is positioned relative to the nearest positioned ancestor (an ancestor with `position: relative`, `absolute`, `fixed`, or `sticky`). If no such ancestor exists, it positions relative to the `<body>`.
- Example: 
  ```css
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  ```
  *Here, `.child` is 10px from the top and 20px from the left of `.parent`.*

**Relative Positioning:**
- An element with `position: relative` stays in the normal flow and moves relative to its original position.
- The `top`, `right`, `bottom`, and `left` properties shift it without removing the reserved space.
- Example:
  ```css
  .element {
    position: relative;
    top: 10px;
    left: 20px;
  }
  ```
  *Here, `.element` shifts 10px down and 20px right, but its original space remains.*


## Position Property:

 The position property specifies the type of positioning method used for an element.

  There are five different position values:

 - __static__: HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties.

 - __relative__: An element with position: relative; is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. 

 - __fixed__: An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

 - __absolute__: An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

 - __sticky__: An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
