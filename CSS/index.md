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

