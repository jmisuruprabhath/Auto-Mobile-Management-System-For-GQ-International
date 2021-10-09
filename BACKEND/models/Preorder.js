const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

// List of columns for Debtor schema
const testSchema = new mongoose.Schema({

DebtorID: {
type: String,
required: true
},
goods: [{ id: String, name:String, quantity:Number, unitprice:Number, price:Number }],
TotalPrice: {
type: String,
required: true
},
Date: {
type: String,
required:true
},
},{
collection: 'Preorder'
});

module.exports = mongoose.model('Preorders', testSchema);