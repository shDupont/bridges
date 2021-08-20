var servidor = require("./config/server")
var consign = require("consign")

var app = servidor.app;
var porta = servidor.porta;

app.set('view engine', 'ejs')
consign().include('./routes').into(app)



app.listen(porta);