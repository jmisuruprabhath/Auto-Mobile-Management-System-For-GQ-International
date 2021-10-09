const router = require("express").Router();
let UpcomingOrder = require("../../models/Supplier/UpcomingOrder");

router.route("/add").post((req,res)=>{

    const orderId = req.body.orderId;
    const itemCode = req.body.itemCode;
    const shipmentDate = req.body.shipmentDate;
    const DispatchStatus = req.body.DispatchStatus;
    const quantity = Number(req.body.quantity);
    const cost = Number(req.body.cost);
  


    const newOrder = new UpcomingOrder({
        orderId,
        itemCode,
        shipmentDate,
        DispatchStatus,
        quantity,
        cost
    })

    newOrder.save().then(()=>{
        res.json("New order added")
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/").get((req,res)=>{
    UpcomingOrder.find().then((UpcomingOrders)=>{
        res.json(UpcomingOrders)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put(async(req, res)=>{
    let Id = req.params.id;
    const {orderId,itemCode,shipmentDate,DispatchStatus,quantity,cost} = req.body;

    const updateOrder = {
        orderId,
        itemCode,
        shipmentDate,
        DispatchStatus,
        quantity,
        cost
    }

    const update = await UpcomingOrder.findByIdAndUpdate(Id, updateOrder)
    .then(()=>{
        res.status(200).send({status: "Order updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })    
})


router.route("/delete/:id").delete(async(req,res)=>{
    let Id = req.params.id;

    await UpcomingOrder.findByIdAndDelete(Id)
        .then(()=>{
            res.status(200).send({status: "Order deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleting data", error: err.message});
        })

})


router.route("/get/:id").get(async(req,res)=>{

    let Id = req.params.id;

    await UpcomingOrder.findById(Id)
        .then((UpcomingOrders)=>{
            res.status(200).send(UpcomingOrders)
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with fetching data", error: err.message});
        })
})



module.exports = router;