import React, { useState, useEffect, useMemo } from "react";
import MainHeader from "../../components/MainHeader";

// https://dmitripavlutin.com/dont-overuse-react-usecallback/
// It returns a moemized value for given input
function SearchText(text) {
  console.log("text", text);
  return <p>{text}</p>;
}

function UseMemo() {
  const [searchText, setSearchText] = useState("");
  const Memozied = useMemo(() => {
    console.log("here");
    return searchText;
    // return <SearchText text={searchText} />;
  }, [searchText.trim()]);

  const handleTextSearch = (event) => {
    // console.log(event.target);
    setSearchText(event.target.value);
  };
  console.log(searchText);
  return (
    <div>
      <MainHeader />
      <input type="text" onChange={handleTextSearch} />
      {Memozied}
      {/* <Memozied searchText={searchText} /> */}
    </div>
  );
}

export default UseMemo;
