import React, { useState } from "react";
import "./Circle.css";
const Circle = () => {
  const [Circle, setCircle] = useState([]);
  const [active, setActive] = useState(false);
  function HandleActive(index) {
    setActive(!active);
  }
  return (
    <div className="circle-container">
      <button
        className="add-button"
        onClick={() => setCircle([...Circle, Circle])}
      >
        Add Circle
      </button>

      {Circle && Circle.length ? (
        Circle.map((item, index) => {
          return (
            <div key={index} className="circle-container">
              <button
                onClick={HandleActive}
                style={{ background: active ? "gray" : "white" }}
                className="circle-button"
              ></button>
            </div>
          );
        })
      ) : (
        <div>No Circle Exist..</div>
      )}
    </div>
  );
};

export default Circle;
