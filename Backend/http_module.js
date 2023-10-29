// //http module to create a server
// const http=require("http")

// //fs module for operations related to file system.
// const fs=require("fs")
// /*here readileSync is there for reading data out of file specified,
//  in the given incoding format*/

// const index=fs.readFileSync('index.html','utf-8')
// const data=fs.readFileSync('data.json','utf-8')


// const server=http.createServer((req,resp)=>{

//     //req.url has the url of where the request is being made.

//     //do this is reqURL starts  with /product. use of startWith() function
//     if(req.url.startsWith('/product'))
//     {
//         // split means split the given string when this ie.; / comes .. this returns an array of strings...
//         const id=req.url.split('/')[2]
//         const product=JSON.parse(data)
//         const item=product.products[+id]
//         resp.setHeader('content-type','text/html')
//         const modifiedindex=index.replace('**title**',item.title).replace('**price**',item.price).replace('**src**',item.images[1]).replace('**rating**',item.rating)
//         resp.end(modifiedindex)
//         return ;
//     }

//     switch(req.url)
//     {
//         case '/home':
//             resp.setHeader('content-type','text/html');
//             resp.end(index);
//             break;
//         case '/api':
//             resp.setHeader('content-type','application/json')
//             resp.end(data);
//             break;
//         default:
//             resp.writeHead(404,"ke kr ra bhai");
//             resp.end();

//     }
// })

// server.listen(9000)

