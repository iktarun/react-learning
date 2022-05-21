import React, { useState, useEffect, useMemo, useCallback } from "react";
import MainHeader from "../../components/MainHeader";
import SearchTextPrint from "./SearchTextPrint";

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
// Checkout this link to know more https://dmitripavlutin.com/react-usememo-hook/
// It returns a moemized callback for given input
// IT can be used to stop re-rendering of child components if we are sending it to child component
function UseCallback() {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const Memozied = useCallback(() => {
    console.log("inside useCallback");
    return searchText;
  }, [searchText]);

  //   To see the re-rendering enable this example and diable above code
  //   const Memozied = () => {
  //     console.log("inside useCallback");
  //     return searchText;
  //   };

  const handleTextSearch = (event) => {
    // console.log(event.target);
    setSearchText(event.target.value);
  };
  //   console.log(searchText);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <MainHeader />
      <p>You clicked {count} times</p>

      <button onClick={updateCount}>Click me to increment</button>
      <div>
        <input type="text" onChange={handleTextSearch} />

        <SearchTextPrint Memozied={Memozied} text={searchText} />
      </div>
    </div>
  );
}

export default UseCallback;
