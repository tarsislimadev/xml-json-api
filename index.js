const express = require('express')
const app = express()
const { PORT } = require('./config.js')
const convert = require('xml-js')

app.use(express.text({ type: 'application/xml' }))

app.post('/api/v1/xml2json', (req, res) => {
  if (req.headers['Content-Type'] !== 'application/xml') {
    return res.status(400).json({ error: 'Content-Type must be application/xml' })
  }
  res.json(convert.xml2json(req.body, { compact: true, spaces: 4 }))
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
