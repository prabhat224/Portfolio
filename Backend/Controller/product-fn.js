const express=require('express')
const fs=require('fs')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const index=fs.readFileSync('index.html','utf-8')

const products=data.products

//CREATE operation called by POST method to add new product.
exports.addProduct=(req,resp)=>{

    const item=req.body;
    console.log(item)
    products.push(item)
}

//READ operation called by GET method to read all products
exports.allProducts=(req,resp)=>{
    resp.json(data)
}

//READ with specific perimeters that is product id
exports.getProductById=(req,resp)=>{
    const id=req.params.id
    const product=products[id-1]
    resp.send(product)
}

//UPDATE with PUT --> PUT overwrites the previous data on updation
//adding a new product on the place of previous data
exports.replaceProduct=(req,resp)=>{
    const id=req.params.id
    const prod={
        'id':id,
        ...req.body
    }
    products[id-1]=prod
    resp.send(products[id-1])
}

//UPDATE with PATCH --> PATCH does'nt overwrites the previous data on updation 
//Editing the details of a given data 
exports.editProdDetails=(req,resp)=>{
    const id=req.params.id
    const prod={
        ...products[id-1],
        ...req.body
    }
    products[id-1]=prod
    resp.send(products[id-1])
}

//DELETE with DELETE --> DELETE an entity out of a collection
//delete a given product with given id
exports.removeProductWithId=(req,resp)=>{
    const id=+req.params.id;
    products.splice(id-1,id);
    resp.send(products)
}