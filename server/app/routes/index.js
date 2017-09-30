var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/contacts')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/contacts/:contactId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    // app.get('/v1/grupos', api.listaGrupos)
    // app.get('/v1/contacts/grupo/:grupoId', api.listaPorGrupo);
        
    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};