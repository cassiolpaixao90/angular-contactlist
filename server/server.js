var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(5000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

