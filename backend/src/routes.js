const express = require('express')//puxanod o modulo
const router = express.Router() //inicializa
const CustomersClass = require('./controllers/Customers')

router.get('/customers', CustomersClass.index)

router.post('/customers', CustomersClass.create)

router.delete('/customers/:id', CustomersClass.delete)

router.put('/customers/:id', CustomersClass.put)

router.patch('/customers', CustomersClass.patch)

module.exports = router//exporta - index