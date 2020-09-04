const knex = require('knex')
const config = require('../../knexfile')

var connection = knex(config.development)

module.exports = connection