const axios = require('axios')

// const POST = async () => {
//     const data = { accessKey: 'helloworld', data: ['hello', 'world'] }
//     const _data = JSON.stringify(data)
//     const response = await axios.post('http://localhost:5000/forms/', {
//         data: _data
//     })
//     console.log(response)
// }

// const POST = async () => {
//     const data = [{ label: 'hello', data: 'workd' }, { label: 'test', data: 'yoyo' }]
//     const _data = JSON.stringify(data)
//     const response = await axios.post('http://localhost:5000/forms/62cb1b30f17741b21cf770d2', {
//         data: _data
//     })
//     console.log(response)
// }

const GET = async () => {
    // const data = { accessKey: 'helloworld', data: ['hello', 'world'] }
    // const _data = JSON.stringify(data)
    const response = await axios.get('http://localhost:5000/forms/responses/62cb1b30f17741b21cf770d2/helloworld')
    console.log(response)
}

GET()
// POST()