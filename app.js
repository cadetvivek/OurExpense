
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const hemet = require('helmet');
const morgan = require('morgan');

const sequelize = require('./util/database');

dotenv.config();
const PORT = process.env.PORT;

//model inports
const Expenses = require('./models/expenses');
const User = require('./models/users');
const Orders = require('./models/orders');
const Forgotpasswords = require('./models/forgotpasswords');
const Downloads = require('./models/downloads');

//Router imports
const mainPageRouter = require('./routes/mainpage');
const userRouter = require('./routes/user');
const expenseRouter = require('./routes/expenses');
const purchaseRouter = require('./routes/purchase');
const premiumRouter = require('./routes/premium');
const passwordRouter = require('./routes/password');

//Logging Setup:
const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });

//App Configuration:
const app = express();

//Middleware Setup:
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));


//Database Model Relationships:
User.hasMany(Expenses);
Expenses.belongsTo(User,{constraints:true, onDelete:'CASCADE'});

User.hasMany(Orders);
Orders.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});

User.hasMany(Forgotpasswords);
Forgotpasswords.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

User.hasMany(Downloads);
Downloads.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

//Route Setup:
app.use(mainPageRouter)
app.use('/user',userRouter);
app.use('/purchase',purchaseRouter);
app.use('/expenses',expenseRouter);
app.use('/premium',premiumRouter);
app.use('/password',passwordRouter);


//Server Initialization:
async function initiate(){
    try {
        await sequelize.sync();
        app.listen(PORT,()=>{
            console.log(`Server is running at ${PORT}`);
        });       
    } catch (error) {
        console.log(error);
    }
}
initiate();
