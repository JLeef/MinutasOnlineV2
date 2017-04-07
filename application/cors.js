function AllowCrossDomain(){

	this.permisos = function(req, res, next){
		var whiteList = [
			'http://localhost:4200',
			'http://google.com.ec',
		];
		var origen = req.headers.origin;
		if(whiteList.indexOf(origen) >= 1){
			res.setHeader('Acces-Control-Allow-Origin', origen);
		}
		//res.header('Acces-Control-Allow-Origin', 'http://localhost:4200');
		res.header('Acces-Control-Allow-Headers','Content-Type');
		res.header('Acces-Control-Allow-Origin', 'GET,PUT,POST,DELETE,OPTIONS');
		next();
	}
}
module.exports = new AllowCrossDomain();