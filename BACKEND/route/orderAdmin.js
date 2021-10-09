const router = require("express").Router();
//let student = require("../models/Student");
const orderAdmin = require("../models/posts");


//http:localhost:8070/orderAdmin/add

router.route("/add").post((req,res)=>{

    const order_id = req.body.order_id;
    const item_id = req.body.item_id;
    const amount = Number(req.body. amount);
    const total = Number(req.body. total);
    const cus_id = req.body.cus_id;
    const status = req.body.status;
    const date = req.body.date;

    const neworderAdmin = new orderAdmin({

        order_id,
        item_id,
        amount,
        total,
        cus_id,
        status,
        date

    })

    neworderAdmin.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })

}) 

//http://localhost:8070/orderAdmin/
router.route("/").get((req,res)=>{

    orderAdmin.find().then((orderAdmin)=>{
        res.json(orderAdmin)
    }).catch((err)=>{
        console.log(err)
    })

})

//http//localhost:8070/orderAdmin/update
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const { order_id,item_id,amount,total,cus_id,status,date} = req.body;

    const updateorderAdmin = {
        order_id,
        item_id,
        amount,
        total,
        cus_id,
        status,
        date
    }

const update = await orderAdmin.findByIdAndUpdate(userId,updateorderAdmin).then(()=>{
    res.status(200).send({status:"User updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data"});
})

})


//http//localhost:8070/orderAdmin/delete
router.route("/delete/:id").delete(async(req,res)=>{
    let useId = req.params.id;

    await orderAdmin.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({status: "order deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in deleting user"})
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await orderAdmin.findById(userId).then((orderAdmin)=>{
        res.status(200).send({status:"user fetched", orderAdmin})
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;