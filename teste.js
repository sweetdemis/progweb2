const express = require('express');
const app = express(); //como se fosse um construtor

app.get("/oi", (req, res) => { //req de requerir e res de responder
    res.send("oi")
})

app.get("/", (req, res) => { //rota raiz
    res.send("kkkk");
})

app.get("/sss", (req, res) => { 
    res.send("louis é lindo sim")
})

app.listen(3000, () => { //listen pq ele sempre fica ouvindo a porta e capta quando recebe algo
    console.log("servidor ligado na porta 3000") //ctrl c para derrubar o servidor
})

app.get("/curso/:c", (req, res) => { //:c acessivel usando qualquer coisa
    res.send("o curso é: "+req.params.c) //req pega oq o usuario digitou
})

app.get("/:c1/:c2", (req, res) => { 
    res.send("vc digitou "+req.params.c1+ " e "+req.params.c2+".")
})

app.get("/pesquisa", (req, res) => { ///pesquisa?q=ifrs
    //res.send("voce pesquisou por: "+req.query.q+". O segundo parametro digitado foi: "+req.query.s) 
    const {q, s} = req.query;
    res.send("voce pesquisou por: "+q+". O segundo parametro digitado foi: "+s) ///pesquisa?q=ifrs&s=oi

})

app.get("*", (req, res) => { //sempre fica por ultimo por causa da rota
    res.send("esta rota nao existe")
})

