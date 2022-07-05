const { Router } = require('express')
const routes = Router();
const UserController = require('../controllers/User')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/Product')
const CartController = require('../controllers/Cart')

const { authenticate } = require('../middlewares')

routes.get('/', (req,res)=> {
  res.send('<h1>Hello World</h1>')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/:user_id/products', authenticate, ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductsById)

routes.post('/carts/:user_id',authenticate, CartController.createCart)
routes.get('/carts/:user_id', authenticate, CartController.getUserCarts)

routes.get('/carts/:user_id/:cart_id',authenticate, CartController.getCart)


module.exports = routes;
