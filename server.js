require('dotenv').config();
const request = require("request");
const express = require("express");

const app = express();


const PORT = process.env.PORT;



const options = {
    method: 'GET',
    url:'https://api.zoom.us/v2/users/me',
    headers: {
        authorization: `Bearer ${process.env.TOKEN}`
    }
}

request(options , (err , res , body)=>{
    if(err) throw new Error(err);
    console.log(" the user response is : " , res);
    console.log("the BODY is : " , body);
})

app.listen(PORT , ()=>{
    console.log(`the server is up at ${PORT}`)
});