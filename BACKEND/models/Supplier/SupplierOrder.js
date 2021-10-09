const mongoose = require('mongoose');

//const Schema = mongoose.schema();

const supplierOrderSchema = mongoose.Schema ({
    orderId : {
        type : String,
        required : true       //backend validattion
    },
    itemCode : {
        type : String,
        required : true       //backend validattion
    },
    description : {
        type : String,
        required : true       //backend validattion
    },
    quantity : {
        type : Number,
        required : true       //backend validattion
    },
    cost : {
        type : Number,
        required : true       //backend validattion
    },
    deficitId : {
        type : String,
        required : true       //backend validattion
    }

})


const SupplierOrder = mongoose.model("Supplier.Order", supplierOrderSchema);  //In mongoDB tablename => DocumentName is suppliers

module.exports = SupplierOrder;