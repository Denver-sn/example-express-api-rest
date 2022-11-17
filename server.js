// import the requirements
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
// create http
const server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error))


server.listen(1510)
