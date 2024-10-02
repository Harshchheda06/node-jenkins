const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello");
});
app.get("/123",(req,res)=>{
    res.send("123");
});

// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname+'/about.html'));
   
//   });

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});