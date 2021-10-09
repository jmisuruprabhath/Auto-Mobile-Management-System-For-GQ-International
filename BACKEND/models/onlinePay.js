const mongoose = require('mongoose');

const ESchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    orderID :{
        type :String,
        required:true
    },
    cusID :{
        type :String,
        required:true
    },
    productCode :{
        type :String,
        required:true
    },
    amount :{
        type:String,
        required:true
    },
    paySlip :{
        type:String,
        required:true
    }
})

const OnlinePay = mongoose.model('Payment',ESchema);
module.exports = OnlinePay;