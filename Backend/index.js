//when i say require this it returns a object which can have properties fn defined in it.
const express=require('express')
const productController=require('./Controller/product-fn')
const router=express.Router();

//This return a server object which has all properties of server defined 
const server=express();

//Creating a BODY Parser
server.use(express.json());

server.use('/api',router)

router.post('/new',productController.addProduct)
.get('/shop',productController.allProducts)
.get('/shop/:id',productController.getProductById)
.put('/shop/:id',productController.replaceProduct)
.patch('/shop/:id',productController.editProdDetails)
.delete('/shop/:id',productController.removeProductWithId)
.get('/',(req,resp)=>{
    resp.json({'type':'get'})
})






server.listen(8080)