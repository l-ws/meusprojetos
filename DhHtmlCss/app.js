const express = require('express');
const app = express();
app.get("/num",(req, res)=>
    res.send("Voce esta na num "));
app.listen(8000,()=>{
    console.log("Levantando um servidor com Express")    
})