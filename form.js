// const http = require("http")

// http.createServer((req, res) => {

//     if (req.url == "/") {
//         res.writeHead(200, { "content-type": "text/html" })
//         res.write(`
//     <form action="/submit" method="post">
//     <input type="text"  placeholder="name"/>
//     <button>submit</button>   
//     </form>
//     `)
//     } else if (req.url == "/submit") {
//         res.write(
//             `<h1>submitted</h1>`
//         )
//     }
//     res.end()

// }).listen(3000)



// by html file 


const http = require("http")
const fs = require("fs")
http.createServer((req, res) => {
    fs.readFile("./html/form.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" })
            res.writable("internal server error")
            req.end()
            return
        }
        res.writeHead(201, { "content-type": "text/html" })
        res.write(data)
        res.end()
    })
}).listen(3000)