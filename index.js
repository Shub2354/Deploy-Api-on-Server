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
    fs.readFile("student.json" , function(err, data) {
        if(err) throw err;
        console.log("Read successfully");
        let studentdata = JSON.parse(data);
        res.json(studentdata);
    })
    
})