import {React, useState } from 'react';

import './App.css'

function App() {
  const [fixTask, setFixTask] = useState(null);
  const [todo, setTodo] = useState("");
  const [arr,setArr] = useState([]);
  const [taskDone, setTaskDone] = useState([]);


  //Immutable : bat bien
  const handleSubmit = () => {
    if(fixTask === null) {
      if(todo.trim() === "") {
        alert('Khong duoc de trong');
        return;
      }
      if(todo.length > 250) {
        alert("Khong qua 250 ky tu");
        return;
      }
      const found = arr.find((item) => item.toLowerCase().trim() === todo.toLowerCase().trim());
      console.log(found)
      if(found) {
        alert("Trung cong viec");
        return;
      }
      setArr([todo.trim(),...arr]);
      setTodo("");
    } else {

      if(todo.trim() === "") {
        alert('Khong duoc de trong');
        return;
      }
      if(todo.length > 250) {
        alert("Khong qua 250 ky tu");
        return;
      }
      // bang ten khac index
      const found = arr.find((item,index) => item.toLowerCase().trim() === todo.toLowerCase().trim() && fixTask !== index);
      console.log(found)
      if(found) {
        alert("Trung cong viec");
        return;
      }
      const newListTask = [...arr];
      newListTask[fixTask] = todo.trim();
      setArr(newListTask);
      setFixTask(null);
    }
    setTodo("");
  }

  const handleFix = (index) => {
    setTodo(arr[index])  
    setFixTask(index);
  }

  const handleDelete = (index) => {
    const isConfirm = confirm("Do you delete task");
    if(!isConfirm) return;

    const newListTask = [...arr];
    newListTask.splice(index, 1);
    setArr(newListTask);
  }

  const handleDone = (title, isDone) => {
    // const newTaskDone = Object.assign({},taskDone);
    // newTaskDone[index] = !taskDone[index];
    // setTaskDone(newTaskDone);
    if(isDone)  setTaskDone([...taskDone,title]);
    else {
      const newArr = taskDone.filter((item) => item !== title);
      setTaskDone(newArr);
    }
  }
  return ( 
    <main>
      <h1 className="page-heading">Create your Todo-List</h1>
        <div className='todo-form'>
          <input 
          type='text'd="todo-input"
          className="input"
          placeholder="What are your tasks for today?"
          spellcheck="false" 
          value={todo} 
          onChange={(e) => {
            setTodo(e.target.value);
        }} 
        onKeyDown={(e) =>{
          if (e.key === "Enter") {
            if(e.target.value === '') {
              alert("Khong duoc de trong");
              return;
            } else handleSubmit();  
          }
        }}/>
        <button id="submit" className="submit-btn"
              onClick={handleSubmit} 
              onMouseDown={(e) => {
                e.preventDefault();
              }}>{fixTask === null ? "Add" : "Save"}
            </button>
        </div>
        <ul id="task-list" className="task-list">
            {arr && arr.map((item, index) => {
                return <li key={index} className={taskDone.includes(item) === false ? "task-item":"task-item completed"}> 
                <span className='task-title'>{item}</span>
                <div className='task-action'>
                  <button 
                  className="task-btn edit" 
                  onClick={ () => {
                  handleFix(index)}
                  } >Edit</button>
                  <button 
                  className="task-btn done"
                  onClick={() => {
                    handleDone(item, taskDone.includes(item) === false );
                  } }>{taskDone.includes(item) === false ? "MARK AS DONE" : "MARK AS UNDONE"}</button>
                  <button 
                  className="task-btn delete" 
                  onClick={() => {
                    handleDelete(index);
                  }}>Delete</button>
                </div>
                </li>;
            })}
        </ul>
    </main>
  )
}

export default App

