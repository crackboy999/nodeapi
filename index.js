
require('./config/config');

const express = require('express')
const app = express()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});
 
app.get('/usuarios', function (req, res) {
  res.json([{
    "id":1,
    "nombre":"Antonio",
    "tipo":"Usuario Administrador"
  },{
    "id":2,
    "nombre":"Emanuel",
    "tipo":"Usuario Invitado"
  },
  {
    "id":3,
    "nombre":"Moises",
    "tipo":"Usuario Invitado"
  }]);
})
 
app.listen(process.env.PORT,function(){
    console.log("Server on port 4000");
})