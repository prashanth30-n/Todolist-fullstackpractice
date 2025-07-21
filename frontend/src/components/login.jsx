export function Login(){
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
return <div>
    <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
    <input type="text" pnChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
    <button onClick={()=>{
        fetch("http://localhost:3000/login",{
            method:"POST",
            body:JSON.stringify({
                username,password
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async function(req,res){
            const json=await res.json();
            if(json.token){
                localStorage.setItem("token",json.token);
                alert("login successful");
            } else {
                alert(json.msg);
            }
        });
    }}>Login</button>
</div>
}