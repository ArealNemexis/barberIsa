const express = require('express')
const router = express.Router()
const CustomersClass = require('./controllers/Customers')

router.get('/customers', CustomersClass.index)

router.post('/customers', CustomersClass.create)

router.delete('/customers/:id', CustomersClass.delete)

router.put('/customers/:id', CustomersClass.put)

router.patch('/customers', CustomersClass.patch)

module.exports = router