const express = require("express");
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'))

app.get('/detalhe', (req, res) => {
   
    const detalhes = {
        livro1: "Uma história sobre recomeços, o amor e a paixão pelos livros, conheça o romance contemporâneo que conquistou milhares de leitores da best-seller Susan Wiggs, autora de Mapa do coração e Clube de Costura dos Corações Remendados.",
        livro2: "Uma história sobre autodescoberta e novos amores: O cara dos sonhos... ou a garota que não sai da sua cabeça?",
        livro3: "Neste clássico da literatura, e um dos mistérios mais famosos da Rainha do Crime, Hercule Poirot precisa descobrir quem está por trás do assassinato no Expresso do Oriente – e o culpado está entre os passageiros do trem."
    }

    const detalhe = req.params;
    res.render('detalhes', {detalhe, detalhes})
})

app.get('/', (req, res) => {

    const livros = {
        livro1: "A livraria dos Achados e Perdidos",
        livro2: "Cool For The Summer: Um Verão Insquecível",
        livro3: "Assassinto no Expresso do Oriente"
    }
    res.render('home', {livros});
})

app.listen(3000, () =>{
    console.log("servidor ligado na porta 3000");
})