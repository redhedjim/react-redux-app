import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data){
    let errors = {};

    if(Validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.eail = "Email is not valid"
    }
    if(Validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }
    if(Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if(!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = "Passwords must match"
    }
    if(Validator.isNull(data.timezone)) {
        errors.email = 'This field is required';
    }
   
    return {
        errors,
        isValid: isEmpty(erors)
    }
}
router.post('/', (req, res) => {
   const { errors, isValid } = validateInput(req.body);

   if(!isValid) {
       res.status(400).json(errors);
   }
});

export default router;