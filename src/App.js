import React, { useState } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
import { useContext } from 'react';
import TodoList from './Components/TodoList/TodoList';
export const UserContext = React.createContext(useContext);

function App() {
  
  const [showInput, setShowInput] = useState("")
  const [listData, setListData] = useState([]);
  // const [deleteData, setDeleteData] = useState(false);

  const handleShowInput = (e) => {
    setShowInput(e.target.value)
    
  };

  // const addList = (input) => {
  //   if (input.trim() !== "") {
  //     setListData([...listData, input]);
  //     setShowInput('');
  //   }
  // }
  const addList = (showInput) => {
    if (showInput !== "") {
      setListData([...listData, showInput]);
      setShowInput('');
    }
  }

  const handleEnterPress =(e)=>{
    if(e.keyCode === 13){
      addList(showInput)
      setShowInput("")
    }
  }

   const deleteList = (index) => {
    const newListData = listData.filter((_, i) => i !== index);
    setListData(newListData);
  };
  return (
    <div >
      <UserContext.Provider value={{showInput, handleShowInput , addList, listData , deleteList, handleEnterPress}}  >
          <Todo />
          {
            listData.map((listItem, i)=>{
              return(
                <TodoList key={i} index={i} item={listItem}  />
              )
            })
          }
          
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
