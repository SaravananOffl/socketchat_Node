const express  = require('express');
const app = express();
const body_parser= require('body-parser');
const socket = require('socket.io');


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',(req,res)=>{

    res.render('index');

});

const server = app.listen('3000', ()=> console.log("Server Started"));


// socket Setup

const io = socket(server);

io.on ('connection',(socket)=>{
	console.log('made Socket Connection');
	console.log(socket);
});