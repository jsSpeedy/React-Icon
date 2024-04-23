import { useEffect } from "react";

function Simple() {
  console.log("simple içerisi tetiklendi");
  useEffect(() => {
    console.log("Sahneye Eklendi.");
    return () => {
      console.log("Sahneden silindi.");
    };
  }, []);
  return <div>Simple</div>;
}

export default Simple;
