const router = require("express").Router();
let Supplier = require("../../models/Supplier/Supplier");

router.route("/add").post((req,res)=>{

    const supplierId = req.body.supplierId;
    const name = req.body.name;
    const address = req.body.address;
    const country = req.body.country;
    const postalCode = req.body.postalCode;
    const email = req.body.email;
    const phone =req.body.phone;


    const newSupplier = new Supplier({
        supplierId,
        name,
        address,
        country,
        postalCode,
        email,
        phone
    })

    newSupplier.save().then(()=>{
        res.json("Supplier added")
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/").get((req,res)=>{
    Supplier.find().then((Suppliers)=>{
        res.json(Suppliers)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    const {supplierId,name,address,country,postalCode,email,phone} = req.body;

    const updateSupplier = {
        supplierId,
        name,
        address,
        country,
        postalCode,
        email,
        phone
    }

    const update = await Supplier.findByIdAndUpdate(userId, updateSupplier)
    .then(()=>{
        res.status(200).send({status: "Supplier updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })    
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Supplier.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "Supplier deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with deleting data", error: err.message});
        })

})


router.route("/get/:id").get(async(req,res)=>{

    let userId = req.params.id;

    await Supplier.findById(userId)
        .then((Supplier)=>{
            res.status(200).send(Supplier)
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with fetching data", error: err.message});
        })
})



module.exports = router;