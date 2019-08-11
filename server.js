require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = process.env.PORT

//CORS enable
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Router middleware
const posts = require('./api/routes/posts',)
app.use('/posts', posts)

//Mongoose middleware
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds117816.mlab.com:17816/${process.env.MLAB_DB}`, { useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log(`Connected to mLab ${process.env.MLAB_DB}`)
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`AWS MERN app live on port ${port}`))