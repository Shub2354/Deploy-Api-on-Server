const express = require('express');
const app = express();
const students = require('./student.json');




app.listen(process.env.PORT || 5000, err => {
    if(err){
        console.log(err.message);
    }
    console.log('Server is running');
});

app.get("/", (req, res) => {
    res.send("Working");
})

app.get("/studentList", ( req, res) => {
   res.send(students);
    
});