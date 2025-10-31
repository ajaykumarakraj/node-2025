const http = require("http")
const { json } = require("stream/consumers")

const userData = [
    {
        name: "ajay",
        age: 27,
        email: "ajay@gmail.com"
    },

    {
        name: "ajay",
        age: 27,
        email: "ajay@gmail.com"
    }

]
http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(JSON.stringify(userData))
    res.end()
}
).listen(6100)