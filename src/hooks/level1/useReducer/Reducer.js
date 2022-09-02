import React from "react";
import useStateContext from "./context/StateContext";
import Form from "./components/Form";
import PrintTodos from "./components/PrintTodos";
function Reducer() {
  const { todos } = useStateContext();
  console.log(todos);
  return (
    <div>
      <Form />
      <PrintTodos />
    </div>
  );
}

export default Reducer;
