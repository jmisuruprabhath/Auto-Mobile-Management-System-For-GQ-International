const express = require('express');
const Debtor = require('../models/Debtor')
const router = express.Router();

//save posts

router.post('/postd/save',(req,res)=>{

    let newDebtor = new Debtor(req.body);

    newDebtor.save((err)=>{
        if (err){
            return res.status(400).json({
                error:"Failed"
            });
        }
        return res.status(200).json({
            success:"Debtor saved successfully"
        });
    });
});

//get method

router.get('/postsd',(req,res)=>{
    Debtor.find().exec((err,Debtor)=>{
        if(err){
            return res.status(400).json({
                error: "Get Failed"
            });
        }
        return res.status(200).json({
            success:true,
            existingDebtor: Debtor
        });
    });
});


//get specific debtor

router.get("/postd/:id",(req,res)=>{
    let debtorId = req.params.id;
    
    Debtor.findById(debtorId,(err,debtor)=>{
        if(err){
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({
            succes:true,
            debtor
        });
    });

});

//update

router.put('/postd/update/:id',(req,res)=>{
    Debtor.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:"error in update"})
            }

            return res.status(200).json({
                success:"updated successfully"
            });
        }

    );
});

//delete 

router.delete('/postd/delete/:id',(req,res)=>{
    Debtor.findByIdAndRemove(req.params.id).exec((err,deletedDebtor)=>{
        if(err) return res.status(400).json({
            message: "Delete unsuccessfull",err
        });

        return res.json({
            message:"Delete successfull",deletedDebtor
        });
    });
});

module.exports = router;