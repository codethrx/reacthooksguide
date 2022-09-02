import React, { useState, useMemo, useEffect } from "react";
import { useCallback } from "react";
const slowFn = (val) => {
  for (let i = 1; i < 1000000000; i++) {}
  return val * 2;
};
function Memo() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNum = useMemo(() => slowFn(num), [num]);
  const theme = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };
  const printName = useCallback(() => console.log(`name`), [dark]);
  useEffect(() => {
    console.log("changed");
  }, [printName]);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <p style={theme}>{doubleNum}</p>
    </div>
  );
}

export default Memo;
