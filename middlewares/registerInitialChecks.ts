import {NextFunction, Request, Response} from "express";
import emailValidate from "../utils/emailValidate";
import passwordValidate from "../utils/passwordValidate";

const registerInitialChecks = (req: Request, res: Response, next: NextFunction) => {
    const {email, password, confirmPassword} = req.body;
    if (typeof email === 'string'
        && typeof password === 'string'
        && confirmPassword === 'string'
        && email.length > 0
        && password.length > 8
        && confirmPassword === password
        && emailValidate(email) && passwordValidate(password)
    ) next();
    else res.status(401).send("INITIAL CHECKS FAILED");
}

export default registerInitialChecks;