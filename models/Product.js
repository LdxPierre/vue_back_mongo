const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le produit doit possèder un nom'],
    min: [3, 'Le nom du produit doit possèder au moins 3 caractères'],
    max: [20, 'Le nom du produit doit possèder moins de 20 caractères']
  },
  slug:String,
  price: {
    type: Number,
    required: [true, 'Le produit doit possèder un prix'],
    min: [1, 'Le prix du produit doit être au moins de 1'],
    max: [5000, 'Le prix du produit ne doit pas dépasser 5000']
  }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product