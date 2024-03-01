const express = require("express")
const app = express()
 
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
 
app.get("/", function(req, res){
    res.send("Página principal")
})
 
app.get("/cadastrar", function(req, res){
    res.send("Página cadastrar")
})
 
app.get("/produtos/item/quantidade", function(req, res){
    res.send("Página produtos/item/quantidade")
})
 
app.get("/contato", function(req, res){
    res.send("Página contato")
})