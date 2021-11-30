const express = require('express');
const app = express();
const students = require('./student.json');
const fs = require('fs');
let port = process.env.Port || 3000;



app.listen(port, err => {
    if(err){
        console.log(err.message);
    }
    console.log('Server is running');
})



app.get("/student/studentList", ( req, res) => {
   res.send(students);
    
})