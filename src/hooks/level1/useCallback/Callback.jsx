import React, { useState, useCallback } from "react";
import List from "./List";
function Callback() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const getItem = useCallback(() => [num, num + 1, num + 2], [num]);
  const theme = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={(e) => setDark(!dark)}>Toggle Theme</button>
      <List getItem={getItem} />
    </div>
  );
}

export default Callback;
