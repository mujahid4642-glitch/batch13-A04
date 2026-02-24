1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


ans:1. What they select
getElementById: Selects one element by its unique ID.
getElementsByClassName: Selects all elements with a specific class.
querySelector: Selects the first element that matches any CSS selector (like .class, #id, or div > p).
querySelectorAll: Selects all elements matching a CSS selector.
2. Live vs. Static (The "Update" Difference)
getElementsByClassName is Live: If you add a new element to the page later, the list updates automatically.
querySelectorAll is Static: It’s a snapshot. If the page changes, the list stays the same.
3. Ease of Use
querySelector(All) is the most popular because it is flexible (you can use any CSS rule).
getElementById is the fastest for performance.


2. How do you create and insert a new element into the DOM?



ans:2.To create and insert a new element into the DOM using JavaScript, you follow a three-step process:
Create the element using document.createElement().
Configure the element (add content, attributes, classes, etc.)
Insert the element into an existing part of the DOM using an insertion method like appendChild() or append(). 


3. What is Event Bubbling? And how does it work?



ans:3.Event bubbling is a JavaScript DOM event propagation mechanism where an event triggered on a child element (target) propagates upward, triggering handlers on its parent and ancestor elements in sequence.