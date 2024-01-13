import React, { useState } from "react";
import data from "./data";
const Accord = () => {
  const [select, setSelect] = useState(null);
  const [enables, setEnables] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);
  const handleSingleSelection = (currentId) => {
    console.log(currentId);
    setSelect(currentId === select ? null : currentId);
  };
  function handleMultipleSelection(currentId) {
    let cpyMultiple = [...multipleSelect];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    console.log(findIndexOfCurrentId);
  }
  return (
    <div style={{ alignItems: "center", textAlign: "center" }}>
      <button
        style={{ height: "20px", width: "auto", background: "red" }}
        onClick={() => setMultipleSelect(!enables)}
      >
        Enable multipleSelect
        {/* not added functions for that will add later */}
      </button>
      {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div
                onClick={
                  enables
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question} </h3>
                <span>+</span>
              </div>
              {select === item.id ? <div>{item.answer}</div> : null}
            </div>
          );
        })
      ) : (
        <div>No data is available</div>
      )}
    </div>
  );
};

export default Accord;
