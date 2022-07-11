const router = require('express').Router()
const FormModel = require('../../models/form.model')
const ResponseModel = require('../../models/responses.model')
router.get('/', (req, res) => {
    res.send('Invalid Id')
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    if (!id) {
        res.status(500).send('Invalid ID')
        return
    }
    try {
        const FormData = await FormModel.findById(id)
        if (!FormData) {
            res.status(500).send('Invalid ID')
            return
        }
        res.send(FormData)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/', async (req, res) => {
    const { data } = req.body
    try {
        const parsed = JSON.parse(data)
        const NewForm = new FormModel(parsed)
        const NewFormSaved = await NewForm.save()
        res.send(NewFormSaved)
    } catch (error) {
        res.status(401).send(error.message)
    }
})

router.post('/:id', async (req, res) => {
    const { id } = req.params
    if (!id) {
        res.status(500).send('Invalid ID')
        return
    }
    try {
        const FormData = await FormModel.findById(id)
        if (!FormData) {
            res.status(500).send('Invalid ID')
            return
        }
        const { data } = req.body
        const parsed = JSON.parse(data)
        const NewResponse = new ResponseModel({ formId: id, data: parsed })
        const SavedResponse = await NewResponse.save()
        res.status(200).json(SavedResponse)

    } catch (error) {
        res.status(500).send('Error')
    }
})

router.get('/responses/:id/:token', async (req, res) => {
    const { id, token } = req.params
    if (!id || !token) {
        res.status(500).send('Invalid ID or Token')
        return
    }
    try {
        const FormData = await FormModel.findById(id)
        if (!FormData) {
            res.status(401).send('Invalid Id or Token')
            return
        }
        if (FormData.accessKey !== token) {
            res.status(401).send('Invalid Id or Token')
            return
        }
        const Responses = await ResponseModel.find({ formId: id })
        var toSend = []
        for (var i = 0; i < Responses.length; i++) {
            toSend.push(Responses[i]['data'])
        }
        res.json(toSend)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router