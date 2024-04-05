const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app =express()
app.use(cors()); 
app.use(express.json());


app.post("/logout",(req,res)=>{
    const token= req.body.token;
    const username = req.body.username


    if (token==="sato" && username==="hello"){
        return res.send("logout successfully")
    }
       return res.send("error");
    }
)




app.listen(8081,()=> {
    console.log("Listening...");
})
