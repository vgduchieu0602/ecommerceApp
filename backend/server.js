import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
// const PORT = 5000
console.log(process.env.PORT)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})