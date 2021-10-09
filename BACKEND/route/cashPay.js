const express = require('express');
const Cash = require('../models/cashPay');

const router = express.Router();

//save posts

router.post('/cashPay/save',(req,res)=>{
    let newPost = new Cash(req.body);

    //save
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
           success:"Cash Payment Saved Successfully"
        });

    });
});

//get post

router.get('/cashPay',(req,res)=>{
    Cash.find().exec((err,cash)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCash:cash
        });
    });
});


//get a specifi post

router.get("/cashPay/:id",(req,res)=>{
   let cash = req.params.id;

   Cash.findById(cash,(err,cash)=>{
       if(err){
           return res.status(400).json({success:false,err});
       }

       return res.status(200).json({
           success:true,
           cash
       });
   });
})




//update

router.put('/cashPay/update/:id',(req,res)=>{
    Cash.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,cash)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully"

            });

        }

    );
});

//delete

router.delete('/cashPay/delete/:id',(req,res)=>{
    Cash.findByIdAndRemove(req.params.id).exec((err,deletedCash) =>{
        if(err) return res.status(400).json({
            message:"Deleted UN Successfully",err
        });

        return res.json({
            message:"Delete Successfully",deletedCash
        });
    });
});

module.exports = router;