// import fs from 'fs'
import express from 'express'
import cors from 'cors'

// const data = fs.readFileSync('./database.json')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  res.send(process.cwd())
})

app.listen(3000, () => console.log(process.cwd()))


