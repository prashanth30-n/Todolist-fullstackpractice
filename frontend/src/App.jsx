import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos,setTodos]=useState([]);
 useEffect(()=>{
  fetch('http://localhost:3000/todos',{
    headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
    }
  }).then(async function(res) {
    const json=await res.json();
    setTodos(json.todos);
  })
 },[])


  return (
    
      <div>
       <CreateTodo />
       <Todos todos={todos}></Todos>
      </div>
      
    
  )
}

export default App
