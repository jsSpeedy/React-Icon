import { useRef } from "react";
//useRef ile reference sağlayıp domlara manipüle etmek için kullanırız. Sahnede render mekanizmasını değiştirmeyecek değişkenlerde genellikle kullanırız.
const UseRef = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return [inputRef, handleClick]; // inputRef ve handleClick fonksiyonunu bir nesne olarak döndürün
};

export default UseRef;
