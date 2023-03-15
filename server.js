const express = require ('express');
const app = express();
const port = 8080;

var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());

app.get('/login', function(req, res) {
let {name} = req.body; // json object sent in get: {"name": "A username, idk how to do this without setting up an input field"}
    res.cookie('username', name);
 res.send('Hello World!')
})


app.get('/hello', function(req, res) {
    console.log('username ', req.cookies.username);
    res.send(`Welcome ${req.cookies.username}`)
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))