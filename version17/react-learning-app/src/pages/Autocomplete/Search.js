import React from "react";
// https://javascript.plainenglish.io/debounce-in-javascript-7715d4266542
const debounceFunction = (func, delay) => {
  let timer;
  return function () {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

const Search = (props) => {
  const [text, setText] = React.useState("");

  const debounceDropDown = React.useCallback(
    debounceFunction((nextValue) => apiCall(nextValue), 3000),
    []
  );

  const onChange = (e) => {
    setText(e.target.value);
    debounceDropDown(e.target.value);
  };
  const apiCall = () => {
    console.log("API method called!");
  };

  console.log("text:", text);
  return (
    <React.Fragment>
      <h4>Search...</h4>
      <input type="text" value={text} onChange={onChange} />
    </React.Fragment>
  );
};

export default Search;
