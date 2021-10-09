const express = require('express');
//const preorder = require('../models/Preorder');
const Test = require('../models/Preorder')
const router = express.Router();

//save posts

router.post('/postor/save',(req,res)=>{

    let newTest = new Test(req.body);

    newTest.save((err)=>{
        if (err){
            return res.status(400).json({
                error:"Failed"
            });
        }
        return res.status(200).json({
            success:"Preorder saved successfully"
        });
    });
});

//get method

router.get('/postsor',(req,res)=>{
    Test.find().exec((err,Test)=>{
        if(err){
            return res.status(400).json({
                error: "Get Failed"
            });
        }
        return res.status(200).json({
            success:true,
            existingTest: Test
        });
    });
});


//get specific debtor

router.get("/postor/:id",(req,res)=>{
    let preId = req.params.id;
    
    Test.findById(preId,(err,test)=>{
        if(err){
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({
            succes:true,
            test
        });
    });

});

//update

router.put('/postor/update/:id',(req,res)=>{
    Test.findByIdAndUpdate(
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

router.delete('/postor/delete/:id',(req,res)=>{
    Test.findByIdAndRemove(req.params.id).exec((err,deletedTest)=>{
        if(err) return res.status(400).json({
            message: "Delete unsuccessfull",err
        });

        return res.json({
            message:"Delete successfull",deletedTest
        });
    });
});

module.exports = router;