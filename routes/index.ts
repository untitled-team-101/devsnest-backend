import {NextFunction, Request, Response} from "express";
import express from "express";
import registerInitialChecks from "../middlewares/registerInitialChecks";

var router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {title: 'Express'});
})

router.post('/register', registerInitialChecks);