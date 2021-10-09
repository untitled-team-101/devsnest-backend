const emailValidate = (email:string) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+$/;
    return re.test(email);
}
export default emailValidate;