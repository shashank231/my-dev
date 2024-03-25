const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;


// The asyncHandler function you've provided is a utility function commonly used in Node.js applications,
//  especially with frameworks like Express.js.
//  Its purpose is to handle asynchronous functions within route handlers and middleware.

// In Node.js applications, when dealing with asynchronous operations like database queries
//  (in your case, with Mongoose methods), it's essential to properly handle errors that might occur
//  during those operations.
//  If an error occurs within an asynchronous function, it needs to be passed to Express's error handling
//  middleware to ensure it's appropriately dealt with.

// The asyncHandler function helps streamline this process by wrapping asynchronous route 
// handlers and middleware functions. Here's how it works:

// It takes a function fn as its parameter, which represents an asynchronous route handler or middleware function.
// It returns a new function that takes req, res, and next as its parameters (typical parameters for Express middleware).
// Inside this new function, fn is called asynchronously with req, res, and next.
// The returned promise from calling fn is resolved using Promise.resolve(). This ensures that if fn returns a promise or not, it will always be treated as a promise.
// If the promise resolves successfully, nothing special happens; execution continues.
// If the promise is rejected (i.e., an error occurs), catch(next) catches the error and passes it to Express's next function, which forwards it to the error handling middleware.



// In essence, asyncHandler abstracts away the repetitive error-handling logic that would otherwise need to be manually implemented in every asynchronous route handler or middleware. It promotes cleaner and more concise code by centralizing error handling logic.