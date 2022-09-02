import React from "react";
import { ACTIONS } from "../context/StateContext";
import useStateContext from "../context/StateContext";
function Form() {
  const [val, setVal] = React.useState("");
  const { dispatch } = useStateContext();
  function addTodo() {
    dispatch({ type: ACTIONS.ADD, payload: val });
    setVal("");
  }
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Form;
