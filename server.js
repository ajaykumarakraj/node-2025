const http = require("http");


const age = 28
http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html")
    if (req.url == "/") {
        res.write(`<h2>home page</h2>`)
    } else if (req.url == "/about") {
        res.write(`<h2>about page</h2>`)
    } else {
        res.write(`<h2>other page</h2>`)
    }

    res.end()
}).listen(8000)

