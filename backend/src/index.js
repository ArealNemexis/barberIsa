const express = require('express')
const app = express()
const port = 1264
const router = require('./routes')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port)


/*
app.get("/", (request, response)=>{
    return response.json({mensagem:"bella"})
})

app.post("/usuario", (request, response)=>{
    var { nome, sobrenome, email, senha } = request.body
    var usuario = {"nome":nome, "sobrenome":sobrenome, "email":email, "senha":senha }
    vetor.push(usuario)
    
    fs.appendFile('bd.txt', `${usuario.nome},${usuario.sobrenome},${usuario.email},${usuario.senha}\n`)
    

    return response.json({message:"sucesso"})
})

app.get("/usuario", (request, response)=>{
    response.json(vetor)
})

app.get("/usuario/:id?", (request, response)=>{
    var { id } = request.params
    console.log(id);
    response.json(vetor[id])
})

app.get("/usuarioquery", (request, response)=>{
    var {dados1, dados2} = request.query

    console.log(dados1)
    response.json({dado:vetor[0][dados1]})
})
*/