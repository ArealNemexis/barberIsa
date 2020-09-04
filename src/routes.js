const express = require('express')
const router = express.Router()
const connection = require('./database/connection')
const { request } = require('express')

router.get('/users', async (request, response)=>{
    var resposta = await connection.select('*').from('customers')

    return response.json(resposta)
})

router.post('/users', async (request, response)=>{
    const { name, cpf, phone} = request.body

    await connection('customers').insert({cpf, phone, name})

    return response.json({message:"success"})
})


module.exports = router