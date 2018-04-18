const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json()) // any request would be converted into JSON

const accountsRoutes = require('./src/routes/accounts')
app.use('/accounts', accountsRoutes) 

app.use((err, req, res, next) => {
  console.error(err.stack) // Log the stacktrace of any errors that happen
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app
