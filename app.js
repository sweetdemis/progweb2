const express = require("express");
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const livros = {
        livro1: "A livraria dos Achados e Perdidos",
        livro2: "Cool For The Summer: Um Verão Insquecível",
        livro3: "Assassinto no Expresso do Oriente"
    }
    res.render('home', {livros});
})

app.get('/detalhe/:nome', (req, res) => {
    const detalhes = {
        livro1: "detalhe",
        livro2: "detalhe",
        livro3: "detalhe"
    }
    res.render('detalhe', {livros, detalhes});
})

app.listen(3000, () => {
    console.log("servidor ligado na porta 3000!")
})