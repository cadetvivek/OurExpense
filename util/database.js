const Sequelize = require('sequelize');
const sequelize = new Sequelize('yourExpense','root','Vivek@#12345',{
    dialect:'mysql',
    host:'localhost',
    logging:false
});
module.exports = sequelize;