const mongoose = require('mongoose');

const ESchema = new mongoose.Schema({
    date :{
        type :Date
    },
    cusName :{
        type:String
    },
    contactNo :{
        type:Number
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
        itemCode1:{
            type:String
        },
        qty1:{
            type:Number
        },
        description1:{
            type:String
        },
        unitPrice1:{
            type:String
        },
        price1:{
            type:Number
        },

        itemCode2:{
            type:String
        },
        qty2:{
            type:Number
        },
        description2:{
            type:String
        },
        unitPrice2:{
            type:String
        },
        price2:{
            type:Number
        },

        itemCode3:{
            type:String
        },
        qty3:{
            type:Number
        },
        description3:{
            type:String
        },
        unitPrice3:{
            type:String
        },
        price3:{
            type:Number
        },
    discount:{
        type:Number
    },
    totalAmount:{
        type:Number
    }

})

const CashPay = mongoose.model('CashPayments',ESchema);
module.exports = CashPay;