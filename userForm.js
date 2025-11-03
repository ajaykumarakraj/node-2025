function userForm(req, res) {
    res.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <button>submit</button>
    </form>
        `)
}
module.exports = userForm