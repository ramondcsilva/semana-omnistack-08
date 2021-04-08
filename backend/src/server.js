const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('newconnection!', socket.id);

  socket.on('hello', message => {
    console.log(message)
  })
});

mongoose.connect('mongodb+srv://adm:adm123@clustertest.7vqbg.mongodb.net/Database?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);