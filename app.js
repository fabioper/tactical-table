const express = require('express')
const logger = require('morgan')

const port = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))

// app.get('/', (req, res) => {
//     res.send('Welcome to Tactical Table')
// })

app.listen(port, () => {
    console.log(`Express app listening on port ${ port }`)
})
