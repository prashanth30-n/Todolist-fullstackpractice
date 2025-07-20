const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
const cors=require("cors")//this makes the backend can be used from any frontend
app.use(express.json());//used to send post put requests via postman
app.use(cors());
app.post("/todo",authMiddleware,
    async function(req,res){
const payload=req.body;
const parsedpayload=createTodo.safeParse(payload);
if(!parsedpayload.success){
    res.status(411).json({
        msg:"you sent a wrong input"
    })
    return;
}

//put in mongodb
await todo.create({//await keyword is used because we are waiting here to create this in db then only we will send todois created sometimes db may fail so we are first waiting to be created in db

    title:payload.title,
    description:payload.description,
    complete:false
})
res.json({
    msg:"Todo created"
})

})

app.get("/todos",authMiddleware ,async function(req,res){
    const todos=await todo.find({});//it is eventually hit the db so it takes time so await is used to wait and async keyword because it is using await function
    res.json({
        todos
    })

})

app.put("/completed",authMiddleware ,async function(req,res){
    const updatedpayload=req.body;
    const parsedpayload=updateTodo.safeParse(updatedpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent a wrong input"
        })
        return;
    }
   await todo.update({//it is used to update the todo
    //the _id is created in mongodb for a user when a user creates a todo
    //the update funcion takes the _id and it updates the todo as completed as true it also hits the db so await function is used you can also use .then but it is simple and easy

    _id:req.body.id
   },{
    completed:true
   })
   res.json({
   msg: "todo marked as completed"
   })


})
app.listen(3000);
console.log("hello");



