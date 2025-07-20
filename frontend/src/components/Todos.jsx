export function Todos({todos}){//not sending a single one array of state variables here array of todos
    //to handle with array of todos we use map syntax is little bit different but learn

    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    fetch("http://localhost:3000/completed",{
                        method:"PUT",
                        headers:{
                            "Content-Type":"application/json",
                            Authorization:"Bearer "+localStorage.getItem("token")
                        },
                        body:JSON.stringify({
                            id:todo.id,
                            completed:!todo.completed
                        })
                    }).then(async function(res){
                        const json=await res.json();
                        alert("status changed");
                    })
                }}>{todo.completed==true ?"completed" : "Mark as Completed"}</button>
            </div>
        })}
       

    </div>
}
    
