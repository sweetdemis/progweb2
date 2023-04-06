const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log("servidor ligado na porta 3001")
})

app.get("/", (req, res) => {
    res.send("bem vindo a minha página!")
})

app.get('/nome/:nome', (req, res)=> {
    res.send(`bem vindo(a) ${req.params.nome}!`)
})

app.get("/repetir/:palavra/:vezes", (req, res)=> {
    const {palavra, vezes} = req.params
    let texto=""
    for (let i=0; i< vezes; i++) {
        // texto = texto + " " + palavra //mesma coisa que a debaixo
        texto += " "+palavra //o texto recebe a palarva com o espaço
    }
    res.send(texto)
})

app.get("/rep", (req, res) => {
    const {p, q} = req.params
    texto = ""
    for (let i=0; i<q; i++){
        texto += " "+p
    } res.send(texto)
})

app.get("/som/:animal", (req, res)=> {
    const sons = {
        cachorro: "auauauauau",
        gato: "miauuuu",
        vaca: "muuuuuuuu",
        ovelha: "beeeee",
        cavalo: "rhiiiilll"
    } 

    const artigos = {
        cachorro: "O",
        gato: "O",
        vaca: "A",
        ovelha: "A",
        cavalo: "O"
    } 

    const {animal} = req.params //traz o animal da rota para procurar
    const artigo = artigos[animal] //procura o artigo atrelado ao animal
    const som = sons[animal] //procura o som atrelado ao animal
    if (som == undefined){
        res.send("animal desonhecido")
    } else {
        res.send(`${artigo} ${animal} faz ${som}`)
    }
})

app.get("*", (req, res) => {
    res.send("esta rota nao existe")
})