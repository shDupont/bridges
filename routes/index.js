module.exports = (app) => {
    
    var bd = require("../config/bd")

    app.get("/", (req, res) => {
        bd.conexao()
        bd.pontes.find()
        .then((pontes) => {
            res.render("index", {pontes})
            console.log(pontes)
        })
    })

    app.get("/update", (req, res) => {
        bd.conexao()
        bd.pontes.find()
        .then((pontes) => {
            res.render("index", {pontes})
            console.log(pontes)
        })
    })
}