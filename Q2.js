//todo1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

//todo2: Create an async function that handles a rejected promise using try-catch and logs the error message. [hint: use 'new Error()' for rejects error message]

// Function to simulate a server request that rejects
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 2000); // 2-second delay
  });
};

// Async function to handle the rejected promise and log the error
const fetchAndHandleError = () => {};

// Call the async function
fetchAndHandleError();
