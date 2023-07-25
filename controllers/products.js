const Product = require('../models/Product.js')

const getProducts =( (req,res,next)=> {
  Product.find({})
  .then(result=>res.status(200).json(result))
  .catch(error=>res.status(500).json(error))
});

const getProduct = ((req,res,next) =>{
  if (!req.params.id){
    res.status(400).json({message:'Id missing from request'})
  }
  Product.findOne({_id:req.params.id})
  .then(result=>res.status(200).json([result]))
  .catch(error=>res.status(404).json(error))
})

const createProduct = (req,res,next)=>{
  req.body.slug = req.body.name
  if(!req.body){
    res.status(400).json({message:'Body is missing or invalid'})
  }
  Product.create(req.body)
  .then(result=>res.status(201).json(result))
  .catch(error=>res.status(500).json(error))
}

const updateProduct = (req,res)=>{
  req.params.id ? null : res.status(400).json({message:'Id is missing'})
  req.body ? null : res.status(400).json({message:'Body is missing or invalid'})
  
  Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
  .then(result=>res.status(200).json(result))
  .catch(error=>res.status(404).json(error))
}

const replaceProduct = (req,res)=>{
  req.params.id?null:res.status(400).json({message:'ID is missing'})
  req.body?null:res.status(400).json({message:'Body is missing'})

  Product.findOneAndReplace({_id:req.params.id}, req.body, {new:true})
  .then(result => res.status(200).json(result))
  .catch(error=>res.status(500).json(error))
}

const deleteProduct = (req,res,next)=>{
  req.params.id ? null : res.status(400).json({message: 'ID is missing'})

  Product.findOneAndDelete({_id:req.params.id})
  .then(result=>res.status(200).json({message: `${result.name} has been deleted`}))
  .catch(error=>res.status(404).json(error))
}

module.exports ={
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct
}