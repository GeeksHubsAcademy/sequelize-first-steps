const router =require('express').Router();
const { User } =require('../models/index.js')

router.post('/',(req,res)=>{
    User.create({...req.body})
    .then(user => res.status(201).send(user))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido al tratar de registrarte'})
    });
});

module.exports=router;