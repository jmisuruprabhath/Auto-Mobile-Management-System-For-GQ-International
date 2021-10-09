const mongoose = require('mongoose');

//const Schema = mongoose.schema();

const UpcomingOrderSchema = mongoose.Schema ({
    orderId : {
        type : String,
        required : true       //backend validattion
    },
    itemCode : {
        type : String,
        required : true       //backend validattion
    },
    shipmentDate : {
        type : String,
        //required : true       //backend validattion
    },
    DispatchStatus : {
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
    }

})


const UpcommingOrder = mongoose.model("Supplier.UpcomingOrder", UpcomingOrderSchema);  //In mongoDB tablename => DocumentName is suppliers

module.exports = UpcommingOrder;