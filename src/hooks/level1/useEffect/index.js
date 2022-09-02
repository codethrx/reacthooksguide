import React, { useState, useEffect } from "react";

function LifeCycles() {
  const [type, setType] = useState("posts");
  const buttons = ["posts", "comments", "users"];
  const mappedBtns = buttons.map((btn) => (
    <button
      onClick={() => {
        setType(btn);
      }}
      key={btn}
    >
      {btn}
    </button>
  ));
  useEffect(() => {
    console.log("I am Mounted only when component is mounted");
  }, []);
  useEffect(() => {
    console.log("Resource Type Changed ", type);
    return () => {
      console.log("Resource Type Unmounted ", type);
    };
  }, [type]);
  return <div>{mappedBtns}</div>;
}

export default LifeCycles;
