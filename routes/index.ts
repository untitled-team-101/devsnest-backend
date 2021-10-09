// @ts-ignore
import express, {Request, Response} from 'express'
import userRouter from './user'
import scrumRouter from './scrum'

const router = express.Router()

router.use("/user", userRouter)
router.use("/scrum", scrumRouter)

router.use("/", (req:Request, res:Response)=>{
  res.status(404)
    .send("Not Found")
  console.log("ye hai yaha!")
})

export default router