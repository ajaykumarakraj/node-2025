const http = require("http")
const fs = require("fs")
http.createServer((req, res) => {
    fs.readFile("./html/web.html", "utf-8", (err, data) => {
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