const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// 你的接口
app.get('/api/hello', (req, res) => {
	res.send('Hello Express CommonJS')
})

app.get('/api/user', (req, res) => {
	res.json({ name: 'test', age: 20 })
})

module.exports = app
