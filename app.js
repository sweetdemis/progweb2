const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    res.render('home', {produtos : [
        {nome: 'livro1', detalhe: 'detalhe livro1'},
        {nome: 'livro2', detalhe: 'detalhe livro2'},
        {nome: 'livro3', detalhe: 'detalhe livro3'}
    ]})
})

app.get("/detalhe/:nome", (req, res) => {

})

app.listen(3000, () => {
    console.log("servidor ligado na porta 3000!")
})