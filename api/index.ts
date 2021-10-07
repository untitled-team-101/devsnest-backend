// @ts-ignore
import express, {Request, Response} from 'express'
import userRouter from './user'

const router = express.Router()

router.use("/user", userRouter)

router.use("/", (req:Request, res:Response)=>{
  res.status(404)
    .send("Not Found")
})

export default router
