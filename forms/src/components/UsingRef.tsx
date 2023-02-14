import { useEffect, useRef } from "react";

const UsingRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default UsingRef;
