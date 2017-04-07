var conexion = require('./connection');

function MetodosDB (){
    this.listado = function(respuesta){
        conexion.obtener(function(er, cn){
            cn.query('SELECT * FROM minuta', function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }
    this.insertarInforme = function(datos, respuesta){
        conexion.obtener(function(er, cn){
            cn.query('INSERT INTO informe SET ?', datos, function(error, resultado){
                cn.release();
                 if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send({estado: 'Ok'});
                }
            })
        })
    }
    this.addReunion = function(datos, respuesta){
    	conexion.obtener(function(er, cn){
    		cn.query('INSERT INTO reunion SET ?', datos, function(error, resultado){
                 if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send({estado: 'Ok'});
                }
    		})
    	})
    }
    this.insertarMinuta = function(datos, respuesta){
        conexion.obtener(function(er, cn){
            cn.query('INSERT INTO minuta SET ?', datos, function(error, resultado){
                cn.release();
                 if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send({estado: 'Ok'});
                }
            })
        })
    }
    this.insertarActa = function(datos, respuesta){
        conexion.obtener(function(er, cn){
            cn.query('INSERT INTO acta SET ?', datos, function(error, resultado){
                cn.release();
                 if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send({estado: 'Ok'});
                }
            })
        })
    }
}

module.exports = new MetodosDB();