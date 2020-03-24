const { Product, Category } =require('../models/index.js')
// class ProductController{
//     getAll(req,res){
//         Product.findAll({
//             include:[Category]
//         })
//         .then(products => res.send(products))
//         .catch(err=>{
//             console.log(err)
//             res.status(500).send({message:'Ha habido un problema al cargar los productos'})
//         })
//     }
// insert(req,res){
//     Product.create({...req.body})
//     .then(product => res.status(201).send(product))
//     .catch(err=>{
//         console.log(err)
//         res.status(500).send({message:'Ha habido un problema al cargar los productos'})
//     })
// }
// }

// module.exports= new ProductController();
const ProductController = {
    getAll(req,res){
        Product.findAll({
            include:[Category]
        })
        .then(products => res.send(products))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
    },
    insert(req,res){
        Product.create({...req.body})
        .then(product => res.status(201).send(product))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
    }
}
module.exports = ProductController