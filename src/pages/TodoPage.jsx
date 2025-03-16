import {React, useState } from 'react';

import './App.css'

function App() {
  const [fixTask, setFixTask] = useState(null);
  const [todo, setTodo] = useState("");
  const [arr,setArr] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  
  function validateInput(text) {
    if(text.trim() === "") {
      alert('Khong duoc de trong');
      return;
    }
    if(text.length > 250) {
      alert("Khong qua 250 ky tu");
      return;
    }
  }

  //Immutable : bat bien
  const handleSubmit = () => {
    if(fixTask === null) {
      validateInput(todo);

      const found = arr.find((item) => item.toLowerCase().trim() === todo.toLowerCase().trim());
      console.log(found)
      if(found) {
        alert("Trung cong viec");
        return;
      }
      setArr([todo.trim(),...arr]);
      setTodo("");
    } else {
      validateInput(todo);
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
                    console.log(taskDone.includes(item) === false );
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

// const [formValue, setFormValue] = useState({
//     firstName:"",
//     lastName:"",
//     age:"",
//     address:"",
//     email:"",
//     courses: []
//   })
//   const coursesList = [
//     { 
//       name:"HTML",
//       value:"html"
//     },
//     { 
//       name:"CSS",
//       value:"css"
//     },
//     { 
//       name:"JAVASCRIPT",
//       value:"javascript"
//     },

//   ]

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValue)
//   }

//   const setFieldValue = (e) => {
//     if(e.target.type === 'checkbox') {
//       if(e.target.checked) {
//         setFormValue({
//           ...formValue,
//           [e.target.name]:[
//             ...formValue[e.target.name],
//             e.target.value
//           ]
//         })
        
//       } else {
//         setFormValue({
//           ...formValue,
//           [e.target.name]:formValue[e.target.name].filter((c) => c !== e.target.value)
//         })
//       }
//     } else {
//       setFormValue({
//         ...formValue,
//         [e.target.name] : e.target.value,     
//       })
//     }
//   }
//   return (
//     <main>  
//         <form action="" onSubmit={handleSubmit}>
//             <input 
//             type="text" 
//             name="firstName"
//             value={formValue.firstName}
//             onChange = {setFieldValue}
//             />
//             <input 
//             type="text" 
//             name="lastName"
//             value={formValue.lastName}
//             onChange = {setFieldValue}
//             />
//             <input 
//             type="number" 
//             name="age" 
//             value={formValue.age}
//             onChange = {setFieldValue}
//             />
//             <input 
//             type="text"
//             name="address"
//             value={formValue.address}
//             onChange = {setFieldValue}
//             />
//             <input 
//             type="email" 
//             name="email"
//             value={formValue.email}
//             onChange = {setFieldValue}
//             />
//             {coursesList.map((course) => {
//               const checked = formValue.courses.includes(course.value);
//               return (
//                 <>
//                   <label key={course.value}>
//                     <input 
//                     type="checkbox"
//                     name="courses"
//                     checked={checked}
//                     value={course.value}
//                     onChange = {setFieldValue}
//                     /> {course.name}
//                   </label>
//                 </>
//               )
//             })

//             }
//             <button>Add</button>
//         </form>
//     </main>
//   )
// import {React, useEffect, useState } from 'react';

// import './App.css'

// function App() {
//   const [products, setProduct] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [links, setLink] = useState([]);

//   useEffect(() =>{
//     fetch(`https://api01.f8team.dev/api/products?page=${currentPage}`)
//     .then(res => res.json())
//     .then(response => {
//       setLink(response.links)
//       setProduct(response.data)
//     })
//   },[currentPage])

//   return (
//     <>
//       <h1>Page {currentPage}</h1>
//       <ul>
//           {products.map((item) => {
//             return <li key={item.id}>{item.title}</li>
//           })}
//       </ul>
//       <div>
//         <ul>
//         {links.map((link) => {
//             return <li key={link.label}><button onClick={() => setCurrentPage(+link.label)}>{link.label}</button></li>
//           })}
//         </ul>  
//       </div>
//     </>
//   )
// }

// export default App

