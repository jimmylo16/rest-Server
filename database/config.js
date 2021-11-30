const mongoose = require('mongoose');


const dbConnection=async()=>{
    try {
        await mongoose.connect('mongodb://user_node:p1C8zB9XfjuApS5R@cluster0.4joz5.mongodb.net/Prueba?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false,            
        });
        console.log('base de datos conectada');
    } catch (error) {
        throw new Error('error al iniciar la base de datos')
    }
}


module.exports={
    dbConnection
}