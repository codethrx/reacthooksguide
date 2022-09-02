import React from "react";
import useStateContext from "../context/StateContext";
import Todo from "./Todo";
import { ACTIONS } from "../context/StateContext";

function PrintTodos() {
  const { todos, dispatch } = useStateContext();

  return (
    <div>
      {todos.map((t) => (
        <Todo {...t} key={t.id} dispatch={dispatch} ACTIONS={ACTIONS} />
      ))}
    </div>
  );
}

export default PrintTodos;
