const express = require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

//create a user using : POST "/api/auth/createuser". Doesn't require Auth or no login required 
router.post('/creareuser',[
    body('name','enter a valid name').isLength({ min: 3}),
    body('email','enter a valid email').isEmail(),
    body('password','password must be atleast of 5 chacters').isLength({ min: 5 }),
],async(req,res)=>{
  // if there are error returns bad requests and the errors

try {
  

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // CHECKS WHETHER THE USER WITH THIS EMAIL EXISTS ALREADY
    let user=await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error:"sorry a user with this email already exists "});
    }
    //create a new user
   user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
    //   .then(user => res.json(user))
    //   .catch(err=>console.log(err),
    // res.json({error:'please enter a unique email address',message:err.message}))
    res.json({user})
    // catches the error 
    }catch (error) {
  console.log(error.message);
  res.status(500).send("some error as occured")
    }
    
})
module.exports=router