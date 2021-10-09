const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

// List of columns for Debtor schema
const debtorSchema = new mongoose.Schema({

_id: {
type: String,
required: true
},
name: {
type: String,
required: true
},
contact: {
type: String,
required: true
},
address: {
type: String,
required: true
},
guarantor: {
type: String,
required: true
},
creditLimit: {
type: Number,
required: true
},
remarks: {
type: String,
required: true
}
},{
collection: 'Debtor'
});

module.exports = mongoose.model('Debtor', debtorSchema);