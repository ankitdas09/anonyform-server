const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
    data: [{ label: String, data: String }]
})

const ResponseModel = mongoose.model('Response', Schema)

module.exports = ResponseModel