import React from "react";

function List({ getItem }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    setItems(getItem());
    console.log("re-rendered");
  }, [getItem]);
  return (
    <div>
      {items.map((i) => (
        <h1 key={i}>{i}</h1>
      ))}
    </div>
  );
}

export default List;
