//adding the authentication middlware to app
const mongoose=require("mongoose");
const { string } = require("zod");
const userSchema=mongoose.Schema({
    username:string,
    password:string
});
const user=mongoose.model("users",userSchema);
module.exports={
    user,
};