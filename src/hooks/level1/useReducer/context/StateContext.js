import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4, v4 } from "uuid";
const StateContext = createContext();
export const ACTIONS = Object.freeze({
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
});
const init = {
  todos: [],
};
function reduceTodos(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        todos: [
          ...state.todos,
          { text: action.payload, id: v4(), isCompleted: false },
        ],
      };
    case ACTIONS.DELETE:
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case ACTIONS.UPDATE:
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, isCompleted: !t.isCompleted } : t
        ),
      };
    default:
      return state;
  }
}
export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceTodos, init);
  //state
  const data = { ...state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export default function useStateContext() {
  return useContext(StateContext);
}
