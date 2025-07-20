const jwt=require("jsonwebtoken");
const { user } = require("./user");
const bcrypt=require("bcrypt");
const JWT_SECRET="123";
app.post("/signup",async function(req,res){
    const username=req.body.username
    const password=req.body.password;
    const User=await user.findOne({
        username:username,
    
    })
    if(User){
        res.status(400).json({
            msg:"user already exists"
        })
    }
    const hashedpassword=await bcrypt.hash(password,10);
const user= await user.create({

        username:username,
        password:hashedpassword
    });
    const token=jwt.sign({userId:user._id},JWT_SECRET);
    res.json({
        msg:"user created successfully",
        token,
    })

})
app.post("/login",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const existingUser=await user.findOne({
        username:username
    })
    if(!existingUser){
        res.status(400).json({
            msg:"user does not exist"
        })

    }
    const ispasswordvalid = await bcrypt.compare(password, existingUser.password);
    if(!ispasswordvalid){
        res.status(400).json({
            msg: "password is incorrect"
        });
    }
    const token=jwt.sign({userId:existingUser._id},JWT_SECRET);
    res.json({
        msg:"user logged in successfully",
        token,
    })
})
