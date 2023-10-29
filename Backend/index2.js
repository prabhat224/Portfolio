// const fs=require("fs")
// const index=fs.readFileSync('index.html','utf-8')
// const data=fs.readFileSync('data.json','utf-8')

// const express=require("express");
// // const { response } = require("express");
// // const { nextTick } = require("process");

// const server=express();

/*
Middleware is a function are functions that can access to the req
and resp objects of the server and can manipulate them

we use next() function which on call moves to the next block of code
*/


//logging info or req coming at server thats helps us to track load on server
// server.use((req,resp,next)=>{
//     console.log(req.url,req.ip,new Date(),req.get('User-Agent'))
//     next()
// })

//static is used to ghet inside the specified directory and access static content
// server.use(express.static('public'));


//this is used to parse the json body
// server.use(express.json())
//  const auth=(req,resp,next)=>{
//     if(req.body.password==='123')
//     {
//         next()
//     }
//     else 
//     {
//         resp.sendStatus(401)
//     }
//  }
 
//  server.use(auth)

/*
Chaining of middleware

server.use('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })


*/



/*These are Api End Points  OR Routes
// if you get request of type GET send this in response.
Api end point means where the cycle of req res terminates 
that is Rest being sent*/
// server.get('/',auth,(req,resp)=>{
//     resp.send({"type":"get"})
// })
// server.put('/',(req,resp)=>{
//     resp.send({"type":"put"})
// })
// server.post('/',auth,(req,resp)=>{
//     resp.send({"type":"post"})
// })
// server.patch('/',(req,resp)=>{
//     resp.send({"type":"patch"})
// })
// server.delete('/',(req,resp)=>{
//     resp.send({"type":"delete"})
// })
// server.listen(8080)