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



