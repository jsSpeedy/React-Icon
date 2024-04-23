import { useState, useEffect } from "react";

const UseState = (children) => {
  const [count, setCount] = useState(children);

  console.log("UseState içerisi", count);

  return [count, setCount];
};

export default UseState;
