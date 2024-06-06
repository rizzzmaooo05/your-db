import fs from 'fs'
import path from 'path'
import express from 'express'
import cors from 'cors'
import { cwd } from 'process'

const data = fs.readFileSync(path.join(process.cwd(), 'database.json'))

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(3000, () => console.log(process.cwd()))


