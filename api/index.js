import fs from 'fs'
import express from 'express'
import cors from 'cors'

const data = fs.readFileSync('./models/database/database.json', 'utf-8')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(3000, () => console.log('server run!!!'))
