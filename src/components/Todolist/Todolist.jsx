import React, { useState } from "react";

const Todolist = () => {
  const [Task, setTask] = useState("");
  const [list, setList] = useState([]);

  function AddTask() {
    setList([...list, Task]);
    setTask("");
  }
  function HandleEdit() {}
  function HandleDelete(index) {
    const UpdateList = list.filter((item, id) => index !== id);
    setList(UpdateList);
  }
  return (
    <>
      <div className="container">
        <div className="Header">To Do List</div>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={Task}
          type="text"
          placeholder="Add Task"
        />{" "}
        <button onClick={AddTask}>AddtoList</button>
        <div className="Task-list">
          {list && list.length > 0 ? (
            list.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    {item}
                    <span>
                      {" "}
                      <button onClick={HandleEdit} className="edit">
                        Edit
                      </button>{" "}
                      <button
                        onClick={() => HandleDelete(index)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                </div>
              );
            })
          ) : (
            <div>No Task Added </div>
          )}

          <div>
            <button onClick={() => setList("")}>Clear All Task</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
