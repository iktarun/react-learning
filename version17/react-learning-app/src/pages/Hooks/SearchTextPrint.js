// https://dmitripavlutin.com/dont-overuse-react-usecallback/
import React from "react";
function SearchTextPrint(props) {
  console.log("inside SearchText component:", props.text);
  return <p>{props.Memozied()}</p>;
}

// const propsAreEqual = (prevProps, nextProps) => {
//   console.log(prevProps, nextProps);
//   return (
//     prevProps.text === nextProps.text &&
//     prevProps.Memozied === nextProps.Memozied
//   );
// };

export default React.memo(SearchTextPrint);
