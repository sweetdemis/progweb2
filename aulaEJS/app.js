const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    const numero = Math.ceil
    (Math.random()*10)
    const par = numero % 2 == 0;
    res.render('home', 
    {numero, par})
})

app.get('/cursos', (req, res) => {
    const cursos = ["ADS", "TGP", "Lic. em Mat", "Lic. em Letras", "EMI Info"]
    res.render('cursos', {cursos})
})

app.get('/nome/:nome', (req, res) => {
    const {nome} = req.params
    const {idade} = req.query;
    
    res.render('nome', {nome, idade})
})

app.listen(3000, () => {
    console.log("servior ligado na porta 3000")
})
