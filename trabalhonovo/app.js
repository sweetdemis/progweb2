const express = require("express");
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'))

app.get('/detalhe/:livro', (req, res) => {
   
    const detalhes = {
        livro1: "Uma história sobre recomeços, o amor e a paixão pelos livros, conheça o romance contemporâneo que conquistou milhares de leitores da best-seller Susan Wiggs, autora de Mapa do coração e Clube de Costura dos Corações Remendados.",
        livro2: "Uma história sobre autodescoberta e novos amores: O cara dos sonhos... ou a garota que não sai da sua cabeça?",
        livro3: "Neste clássico da literatura, e um dos mistérios mais famosos da Rainha do Crime, Hercule Poirot precisa descobrir quem está por trás do assassinato no Expresso do Oriente – e o culpado está entre os passageiros do trem."
    }

    const titulos = {
        livro1: "Vermelho, Branco e Sangue Azul",
        livro2: "Baía da Esperança",
        livro3: "É Assim que Acaba"
    }

    const imagens = {
        livro1: "/img/IMG-3281.jpg",
        livro2: "/img/IMG-3282.jpg",
        livro3: "/img/IMG-3283.jpg"
    }

    const {livro} = req.params;
    const titulo = titulos[livro];
    const detalhe = detalhes[livro];
    const imagem = imagens[livro];
    res.render('detalhe', {titulo, detalhe, imagem})
})

app.get('/', (req, res) => {

    const livros = {
        livro1: "Vermelho, Branco e Sangue Azul",
        livro2: "Baía da Esperança",
        livro3: "É Assim que Acaba"
    }
    res.render('home', {livros});
})

app.listen(3000, () =>{
    console.log("servidor ligado na porta 3000");
})
