var mongoose = require('mongoose')

var conexao = async() => {
    var bd = await mongoose.connect('mongodb://localhost/pontes',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
    )
}

var modelo = mongoose.Schema
var ponte = new modelo(
    {
        arquivo: String,
        descricao: String
    }
)

var pontes = mongoose.model('pontes', ponte)

module.exports = {conexao, pontes}