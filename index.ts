import './env'
// @ts-ignore
import Express, {Request, Response} from 'express'
import apiRouter from './api'
import database from "./utils/database";
const PORT = process.env.PORT || 4000
const app = Express()

app.use('/api', apiRouter)

app.use("/", (req: Request, res: Response)=>{
  res.status(404)
    .send("Not Found")
})

database.sync()
  .then(()=>{
    console.log("Connected to database")
    app.listen(PORT, ()=>{
      console.log(`App running on ${PORT}`)
    })
  })
