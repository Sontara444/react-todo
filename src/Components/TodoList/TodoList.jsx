import { UserContext } from "../../App";
import React, { useContext } from "react";
import './TodoList.css'

function TodoList({ item, index }) {
  const { deleteList } = useContext(UserContext);
  return (
    <div className='todolist'>
      <div className='todolist-container'>
        <li className='list-item'>
          <p>{item}</p>
          <span className='icon'>
            <i onClick={()=>deleteList(index)} className="fa-solid fa-trash"></i>
          </span>
        </li>
      </div>
    </div>
  )
}

export default TodoList;
