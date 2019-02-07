const planetModel = require('./planetModel')

planetModel.methods(['get', 'put', 'post', 'delete'])
planetModel.updateOptions({new: true, runValidators: true})

module.exports = planetModel

