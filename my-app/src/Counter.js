import React, { useState } from 'react'; // import React and useState dependencies

function Counter() {
  const [count, setCount] = useState(0); // create state variable 'count' with initial value of 0, and function 'setCount' to update the state

  function increment() { // create increment function
    setCount(count + 1); // update the count value using the setCount function
  }

  function decrement() { // create decrement function
    setCount(count - 1); // update the count value using the setCount function
  }

  // add onClick event handler to increment button, which calls the increment function
  // add onClick event handler to decrement button, which calls the decrement function

  return (
    <div>
      <p>{count}</p> // display the count value
      <button onClick={increment}>increment</button>  
      <button onClick={decrement}>decrement</button> 
    </div>
  );
}

export default Counter; // export the Counter component
