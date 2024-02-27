import React, { useState } from "react";

const Crud = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function AddTask() {
    setList([...list, task]);
    setTask("");
  }
  function HandleDelete(index) {
    const UpdateList = list.filter((item, id) => index !== id);
    setList(UpdateList);
  }
  function HandleEdit() {}
  console.log(list);
  return (
    <div>
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter your task"
        value={task}
      />
      <button onClick={AddTask}>Add Task</button>
      <div>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <span>
                {item}
                <button onClick={() => HandleEdit(index)}>Edit</button>
                <button onClick={() => HandleDelete(index)}>X</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crud;
