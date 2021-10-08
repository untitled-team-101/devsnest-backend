import {NextFunction, Request, Response} from "express";
import emailValidate from "../utils/emailValidate";
import passwordValidate from "../utils/passwordValidate";

const registerInitialChecks = (req: Request, res: Response, next: NextFunction) => {
    const {email, password, confirmPassword} = req.body;

    if (typeof email === 'string' && email.length > 0 && emailValidate(email)) {
        if (typeof password === 'string' && password.length > 8 && passwordValidate(password)) {
            if (confirmPassword === password) {
                next();
            } else res.status(406).send("Password doesn't match!");
        } else res.status(406).send("Invalid Password!");
    } else res.status(406).send("Invalid Email!");

}

export default registerInitialChecks;