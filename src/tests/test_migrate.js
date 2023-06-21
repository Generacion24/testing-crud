const sequelize = require('../utils/connection');
require('../models/Book')


const main = async() => {
    try{
        await sequelize.sync({ force: true });

        process.exit();
    } catch(error){
        console.log(error);
    }
 }

main();