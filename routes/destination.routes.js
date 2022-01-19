const { Router} = require('express');
const { getDestination, postDestination,  } = require('../controllers/destination.controller');

const router = Router();


router.get('/', getDestination);
router.put('/:id', postDestination);


module.exports=router