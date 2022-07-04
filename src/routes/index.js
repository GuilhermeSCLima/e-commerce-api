const { Router } = require('express')
const routes = Router();
const UserController = require('../controllers/User')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/Product')

routes.get('/', (req,res)=> {
  res.send('<h1>Hello World</h1>')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/:user_id/products', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductsById)

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:user_id/cart_id')





module.exports = routes;
