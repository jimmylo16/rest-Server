const mongoose = require('mongoose');


const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useCreateIndex:true,
            // useFindAndModify:false,            
        });
        console.log('base de datos conectada');
    } catch (error) {
        throw new Error('error al iniciar la base de datos')
    }
}


module.exports={
    dbConnection
}