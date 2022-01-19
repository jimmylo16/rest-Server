const axios = require('axios');
const https = require('https');
const { response, request } = require('express');



const getDestination = async (req = request, res = response) => {
	const instance = axios.create({
		baseURL: `https://api.sandbox.viator.com/partner/v1/taxonomy/destinations`,
		httpsAgent: new https.Agent({ rejectUnauthorized: false }),
		headers: {
			'exp-api-key': '1944b0f7-5b90-46a4-afae-cb1fcaa98604'
		},
	});
	const resp = await instance.get();
	// console.log(resp.data.data);
	res.json(resp.data.data);
};



const postDestination = (req, res = response) => {
	const body = req.body;
	// const usuario = new Usuario(body);
	res.json({
		msg: 'post-usuario-controller'
		// usuario
	});
};

module.exports = {
	getDestination,
	postDestination
};
