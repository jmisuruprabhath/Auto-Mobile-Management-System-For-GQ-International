const mongoose = require('mongoose');

//const Schema = mongoose.schema();

const supplierSchema = mongoose.Schema ({
    supplierId : {
        type : String,
        required : true       //backend validattion
    },
    name : {
        type : String,
        required : true       //backend validattion
    },
    address : {
        type : String,
        required : true       //backend validattion
    },
    country : {
        type : String,
        required : true       //backend validattion
    },
    postalCode : {
        type : String,
        required : true       //backend validattion
    },
    email : {
        type : String,
        required : true       //backend validattion
    },
    phone : {
        type : String,
        required : true       //backend validattion
    }

})


const Supplier = mongoose.model("Supplier", supplierSchema);  //In mongoDB tablename => DocumentName is suppliers

module.exports = Supplier;