module.exports = (app) => {
    var multer = require('../config/multer')
    var bancoDados = require('../config/bd')

    app.post("/create", multer.single('arquivo'), (req, res) =>{
        var dados = req.body
        console.log(dados)
        //Executar o banco de dados
        bancoDados.conexao()
        
        new bancoDados.pontes({
            arquivo: req.file.filename,
            descricao: dados.descricao
        }).save()

        res.redirect('/')
    })

    app.get("/delete", (req, res) => {
        var id = req.query.id
        console.log(id)

        bancoDados.pontes.findOneAndRemove(
            {
                _id: id
            }
        ).then(
            (result) => {
                res.redirect("/")
            }
        ).catch((error) => {
            console.log(error)
        })
    })

    app.get('/edit', (req,res)=>{
        var id = req.query.id
        bancoDados.pontes.findOne(
            {
                _id: id
            }
        ).then(
            (pontes) => {
                res.render("update", {pontes})
            }
        ).catch((error) => {
            console.log(error)
        })
    })

    app.post('/update', multer.single('arquivo'), (req, res) =>{
        var dados = req.body
        var id = req.query.id
        if(!req.file){
            var arquivo = dados.antigo
        }
        else{
            var arquivo = req.file.filename
        }

        bancoDados.conexao()

        bancoDados.pontes.findOneAndUpdate(
            {_id:id},
            {
                arquivo: arquivo,
                descricao: dados.descricao
            })
        .then((result) =>{
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
        })
    })

    
}