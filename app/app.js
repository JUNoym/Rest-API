const express = require('express')
const app = express()

app.get('/api/v1/hello', (req, res) => {
    res.json({ "message": "hello, World" })
})

const port = process.env.PORT || 3000
app.listen(port)
console.log("リッスン中：　" + port)