var db = require('./queries');

function http() {
    this.configurar = function(app) {
        app.post('/minutas/',function(solicitud, respuesta){
            db.insertarMinuta(solicitud.body, respuesta);
        })
        app.post('/informe/',function(solicitud, respuesta){
        	db.insertarInforme(solicitud.body, respuesta);	
        })
        app.post('/acta/', function(solicitud, respuesta){
        	db.insertarActa(solicitud.body, respuesta);
        })
		app.get('/Listado/',function(solicitud, respuesta){
            db.listado(respuesta);
        })
        app.post('/addReunion/', function(solicitud, respuesta){
        	db.addReunion(solicitud.body, respuesta);
        })
    }
}

module.exports = new http();