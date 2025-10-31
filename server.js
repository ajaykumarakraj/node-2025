const http = require("http");


const age = 28
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write(`<h2>check it 8000 ` + age + `</h2>`)
    res.end("hello")
}).listen(8000)

