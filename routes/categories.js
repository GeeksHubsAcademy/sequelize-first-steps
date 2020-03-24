const router =require('express').Router();
const { Category, Product } =require('../models/index.js')
router.get('/',(req,res)=>{
    Category.findAll({
        include:[Product]
    })
    .then(categories => res.send(categories))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})

router.post('/',(req,res)=>{
    Category.create({...req.body})
    .then(category => res.status(201).send(category))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})

module.exports=router;