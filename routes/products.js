const express = require('express')
const router = express.Router()

const {
  getProduct,
  getProducts,
  createProduct,
  replaceProduct,
  deleteProduct,
updateProduct
} = require('../controllers/products')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)
router.put('/:id', replaceProduct)

module.exports = router