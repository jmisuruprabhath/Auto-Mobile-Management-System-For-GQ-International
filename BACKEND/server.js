const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config(); // reading all .env variables for relevent files // or the link which i have copied from mongodb is in .env file. so we have to read that file
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;

connectDB();

//middleware
app.use(bodyParser.json());
//using declared dependancys
app.use(cors());
app.use(express.json());

//****import routes
const stockRoutes = require('./route/stocks');
const employeeRoutes = require('./route/employees');
const employeeAttendances = require('./route/attendances');
const employeeSalary = require('./route/esals');
const itemRoutes = require('./route/itemRoutes');
const orderAdminRouter = require('./route/posts');
const shoppingAdminRouter = require('./route/productShoppingRouter');
const productRoutes = require('./route/productRoutes');
const shoppingRoutes = require('./route/productShoppingRouter');
const onlinePayRoutes = require('./route/onlinePay');
const cashPayRoutes = require('./route/cashPay');
const debtorRoutes = require('./route/Debtor');
//const testRoutes =require('./route/testorder');
const preorderRoutes = require('./route/Preorder');
const supplierRouter = require('./route/Supplier/supplierRoute.js');
const supplierOrderRouter = require('./route/Supplier/supplierOrderRoute.js');
const supplierUpcommingOrder = require('./route/Supplier/UpcomingOrderRoute.js');
const expenseRoutes = require('./route/Expenses/expenses');
//****route middleware
app.use(stockRoutes);
app.use(employeeRoutes);
app.use(employeeAttendances);
app.use(employeeSalary);
app.use(itemRoutes);
app.use(orderAdminRouter);
app.use(shoppingAdminRouter);
app.use(productRoutes);
app.use(shoppingRoutes);
app.use(onlinePayRoutes);
app.use(cashPayRoutes);
app.use(debtorRoutes);
//app.use(testRoutes);
app.use(preorderRoutes);
app.use('/supplier', supplierRouter);
app.use('/supplierorder', supplierOrderRouter);
app.use('/upcomingorder', supplierUpcommingOrder);
app.use(expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
