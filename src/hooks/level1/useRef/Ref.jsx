import React, { useRef, useState, useEffect } from "react";

function Ref() {
  const [val, setVal] = useState("");
  const renderCount = useRef(0);
  const focusRef = useRef(null);
  const prevVal = useRef("");
  useEffect(() => {
    renderCount.current = 0;
  }, []);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevVal.current = val;
  }, [val]);

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

      <p>I am rendered {`${renderCount.current}x.`}</p>
      <p>My Previous value is: {prevVal.current}</p>
      <input ref={focusRef} type="number" />
      <button
        onClick={() => {
          focusRef.current.style.backgroundColor = "red";
          focusRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}

export default Ref;
