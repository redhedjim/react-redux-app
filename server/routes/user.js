import express from 'express';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
   const { errors, isValid } = validateInput(req.body);

   if(isValid) {      
       const { username, password, timezone, email } = req.body;
       const password_digest = bcrypt.hashSync(password, 10); //10 is salt

       User.forge({
           username, timezone, email, password_digest
       }).save()
       .then(user => { console.log("success", user); res.json({ success: true })}) 
       .catch(err => { console.log("error", err); res.status(400).json})

   }else{
        res.status(400).json(errors);
   }
});

export default router;