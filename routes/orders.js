const router =require('express').Router();
const {  Product,Order,User } =require('../models/index.js')
router.get('/',(req,res)=>{
    Order.findAll({
        include:[Product,User]
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})

router.post('/',(req,res)=>{
    Order.create({
        status:"pending",
        deliveryDate:req.body.deliveryDate,
        UserId:1
    })
    .then(order =>{
        order.addProduct(req.body.products);//añade a la tabla intermedia
        res.status(201).send(order);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})

module.exports=router;