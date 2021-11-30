const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config')

class Server {
	constructor() {
		this.app = express();
		this.routes();
		this.usuariosPath = '/api/usuarios';

        //Conectar a base de datos

        this.conectarDB();

		//Middlewares
		this.middlewares();
		//Rutas de la app
		this.port = process.env.PORT;
	}
	middlewares() {
		//Cors para ver quien puede acceder a mi api
		this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());

		//directorio publico
		this.app.use(express.static('public'));
	}

    async conectarDB(){
        await dbConnection();
    }

	routes() {
		this.app.use( '/api/usuarios', require('../routes/user.routes'));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log(`escuchando el puerto ${this.port}`);
		});
	}
}

module.exports = Server;
