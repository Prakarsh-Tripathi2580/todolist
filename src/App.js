import React, { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

function App() {
  const [listTodo,setlistTodo]=useState([])
  let addList=(inputText)=>{
    //to check wheter the input is field is not empty, then perform below task
    if(inputText!==''){
    setlistTodo([...listTodo,inputText])
    }
  }

  //delete functionality
  const deleteListItem=(key)=>{
    //we are storing a state in a variable
    let newlistTodo=[...listTodo]
    //splice method is used to delete elements
    newlistTodo.splice(key,1)
    //for updating a state
    setlistTodo([...newlistTodo])

  }
  return (
   <div className='main-container'>
    <div className='center-container'>
      <TodoInput addList=
      {addList}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
     {listTodo.map((listItem,i)=>{
        return(
          
            <TodoList key={i}  index={i} item={listItem} deleteItems={deleteListItem}/>
        )
      })}

    </div>
   </div>
  )
}

export default App
