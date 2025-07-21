 export function signup(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    return <div>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>"
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholer="Paasword"/>
        <button onClick={()=>{
            fetch("http://localhost:3000/signup",{
                method:"POST",
                body:JSON.stringify({
                    username,password
                }),
                headers:{
                    "content-type":"application/json"
                }
            }
    
            ).then(async function(req,res){
                const json=await res.json();
                localStorage.setItem("token",json.tokent);
                alert("signup successful");

        
            });

        }}>Sign up</button>

    </div>
}