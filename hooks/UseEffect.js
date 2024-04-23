import { useState, useEffect, useRef } from "react";

// //useEffect sayfa yüklendiğinde ilk tetiklenmeyi dinler sonrasına bakmaz.
const UseEffect = (children) => {
  const [index, setIndex] = useState(children);

  useEffect(() => {
    console.log("UseEffect içerisi", index);
  }, [index]);

  return [index, setIndex];
};

export default UseEffect;
