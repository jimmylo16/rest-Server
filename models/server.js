const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config')

class Server {
	constructor() {
		this.app = express();
		this.usuariosPath = '/api/usuarios';
		
        //Conectar a base de datos
		
        // this.conectarDB();
		
		//Middlewares
		this.middlewares();

		//Rutas de la app, muy importante cargar primero los middlewares que las rutas, 
		//para que se procese adecuadamente el body
		this.port = process.env.PORT;
		this.routes();
	}
	middlewares() {
		//Cors para ver quien puede acceder a mi api
		this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
		// this.app.use(bodyParser.urlencoded({ extended: false }))
		//directorio publico
		this.app.use(express.static('public'));
	}

    // async conectarDB(){
    //     await dbConnection();
    // }

	routes() {
		this.app.use( '/api/usuarios', require('../routes/user.routes'));
		this.app.use( '/api/destination', require('../routes/destination.routes'));
		this.app.use( '/api/tripAdvisor', require('../routes/tripAdvisor.routes'));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log(`escuchando el puerto ${this.port}`);
		});
	}
}

module.exports = Server;
