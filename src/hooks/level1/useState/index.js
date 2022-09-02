import { useState } from "react";
const getName = (name) => {
  console.log("Rendered");
  return name ?? "Random Name";
};
export default function App() {
  const [value, setValue] = useState(0);
  //another way of settung the state up..
  const [name] = useState(() => getName("Tatheer Khan.."));
  //   const [name] = useState(getName("Tatheer Khan.."));
  //event handlerss
  const incrementNum = () => setValue((prev) => prev + 1);
  const decrementNum = () => setValue((prev) => prev - 1);
  return (
    <div>
      <h1>I am the useState Hook</h1>
      <button onClick={decrementNum}>-</button>
      <span>{value}</span>
      <button onClick={incrementNum}>+</button>
      <p>{name}</p>
    </div>
  );
}
