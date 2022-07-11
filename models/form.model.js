const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    'data': [String],
    'accessKey': { type: String, required: true }
})
const FormModel = mongoose.model('Form', Schema)

module.exports = FormModel