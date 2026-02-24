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

4. What is Event Delegation in JavaScript? Why is it useful?


ans:4.Event delegation is a JavaScript technique where you attach a single event listener to a parent element to manage events for all of its child elements, leveraging the concept of event bubbling. This approach is highly useful for improving performance, simplifying code, and handling dynamic content.

5. What is the difference between preventDefault() and stopPropagation() methods?


ans:5.event.preventDefault() stops the browser's default action for a specific event (e.g., a form submission or link navigation), while event.stopPropagation() stops the event from propagating (bubbling) up to parent elements in the DOM hierarchy.