import React from "react";

function Todo({ text, id, isCompleted, dispatch, ACTIONS }) {
  return (
    <div
      style={{ opacity: isCompleted ? 0.5 : 1 }}
      onClick={() => dispatch({ type: ACTIONS.UPDATE, payload: id })}
    >
      <h2>{text}</h2>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: id })}>
        x
      </button>
    </div>
  );
}

export default Todo;
