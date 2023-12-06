const express = require('express');
const app = express();
const port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/register', function (req, res) {
    res.send('Register Page')
  })

app.listen(port,()=>{
console.log(`Server is running on port ${port}.`)
}) 