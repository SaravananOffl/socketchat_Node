const express  = require('express');
const app = express();
const io = require('socket-io');
const body_parser= require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',(req,res)=>{

    res.render('index');

});

app.listen('3000', ()=> console.log("Server Started"));

