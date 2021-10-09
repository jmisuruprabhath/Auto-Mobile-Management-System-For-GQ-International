const router = require("express").Router();
let SupplierOrder = require("../../models/Supplier/SupplierOrder");

router.route("/add").post((req,res)=>{

    const orderId = req.body.orderId;
    const itemCode = req.body.itemCode;
    const description = req.body.description;
    const quantity = Number(req.body.quantity);
    const cost = Number(req.body.cost);
    const deficitId = req.body.deficitId;
  


    const newOrder = new SupplierOrder({
        orderId,
        itemCode,
        description,
        quantity,
        cost,
        deficitId
    })

    newOrder.save().then(()=>{
        res.json("New order added")
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/").get((req,res)=>{
    SupplierOrder.find().then((SupplierOrders)=>{
        res.json(SupplierOrders)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put(async(req, res)=>{
    let Id = req.params.id;
    const {orderId,itemCode,description,quantity,cost,deficitId} = req.body;

    const updateSupplierOrder = {
        orderId,
        itemCode,
        description,
        quantity,
        cost,
        deficitId
    }

    const update = await SupplierOrder.findByIdAndUpdate(Id, updateSupplierOrder)
    .then(()=>{
        res.status(200).send({status: "Supplier order updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })    
})


router.route("/delete/:id").delete(async(req,res)=>{
    let Id = req.params.id;

    await SupplierOrder.findByIdAndDelete(Id)
        .then(()=>{
            res.status(200).send({status: "Supplier order deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleting data", error: err.message});
        })

})


router.route("/get/:id").get(async(req,res)=>{

    let Id = req.params.id;

    await SupplierOrder.findById(Id)
        .then((SupplierOrder)=>{
            res.status(200).send({status: "Data fetched", SupplierOrder})
            //res.json(SupplierOrder);
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with fetching data", error: err.message});
        })
})



module.exports = router;