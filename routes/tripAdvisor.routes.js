const { Router} = require('express');
const { getTripAdvisor, postTripAdvisor,  } = require('../controllers/tripAdvisor.controller');

const router = Router();


router.post('/', getTripAdvisor);
router.put('/:id', postTripAdvisor);


module.exports=router