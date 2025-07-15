const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://prashanth:prashanth@cluster0.5jyjzzh.mongodb.net/todo")
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoschema);
console.log('db');
module.exports={
    todo
}