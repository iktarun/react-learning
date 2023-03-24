import React, { useState, useEffect } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // Similar to componentDidMount and componentDidUpdate and ComponentWillUnmount:
  useEffect(() => {
    console.log("hello");
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("Unmounting");
    };
  }, [count]);

  const updateCount1 = () => {
    setCount1(count1 + 1);
  };

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <MainHeader /> */}
      <p>You clicked {count} times</p>

      <button onClick={updateCount}>Click me to increment</button>
      <p>You clicked updateCount1 {count1} times</p>
      <button onClick={updateCount1}>
        Click me for updateCount1 increment
      </button>
    </div>
  );
}

export default UseState;
