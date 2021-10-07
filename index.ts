import './env'
import express, {Request, Response} from 'express'
import apiRouter from './api'
const PORT = process.env.PORT || 4000
const app = express()

app.use('/api', apiRouter)

app.use("/", (req: Request, res: Response)=>{
  res.status(404)
    .send("Not Found")
})

app.listen(PORT, ()=>{
  console.log(`App running on ${PORT}`)
})
