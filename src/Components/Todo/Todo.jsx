import React, { useContext } from "react";
import "./Todo.css";
import { UserContext } from "../../App";

function Todo() {
  const { showInput, handleShowInput, addList, handleEnterPress} = useContext(UserContext);

  return (
    <>
      <div className="container">
        <div className="header">ToDo List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={showInput}
          onChange={handleShowInput}
          onKeyDown={handleEnterPress}
        />
        <button onClick={() => addList(showInput)}>
          Add
        </button>
      </div>
    </>
  );
}

export default Todo;

