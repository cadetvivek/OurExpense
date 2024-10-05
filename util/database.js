const Sequelize = require('sequelize');
const sequelize = new Sequelize('yourExpense','root','Vivek@#123456',{
    dialect:'mysql',
    host:'localhost',
    logging:false
});
module.exports = sequelize;