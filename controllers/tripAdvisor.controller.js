const axios = require('axios');
const https = require('https');
const { response, request } = require('express');



const getTripAdvisor = async (req = request, res = response) => {
    const {destination} =  req.body;
    var data = JSON.stringify({
    "filtering": {
        "destination": destination,
        "startDate": "2022-02-22"
    },
    "pagination": {
        "start": 5,
        "count": 50
    },
    "currency": "USD"
    });

    var config = {
    method: 'post',
    url: 'https://api.sandbox.viator.com/partner/products/search',
    headers: { 
        'Content-Type': 'application/json', 
        'exp-api-key': '1944b0f7-5b90-46a4-afae-cb1fcaa98604', 
        'Accept': 'application/json;version=2.0', 
        'Accept-Language': 'es-ES'
    },
    data 
    };

    axios(config)
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
      
 
};



const postTripAdvisor = (req, res = response) => {
	const body = req.body;
	// const usuario = new Usuario(body);
	res.json({
		msg: 'post-usuario-controller'
		// usuario
	});
};

module.exports = {
	getTripAdvisor,
	postTripAdvisor
};
