var express=require('express');
var nodemailer = require("nodemailer");
var cors = require('cors');

var app=express();
app.use(cors());
var path = require('path');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "zjjhzq950826@gmail.com",
        pass: "zq2123400"
    }
});

app.get('/',function(req,res){
res.sendFile(path.resolve('../contact.html'));
});

app.get('/send',function(req,res){
    var mailOptions={
        to : 'zjjhzq950826@gmail.com',
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
       });
});

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
