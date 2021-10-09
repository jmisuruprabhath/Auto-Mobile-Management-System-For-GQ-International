const express = require('express');
const Posts = require('../models/onlinePay');

const router = express.Router();

//save posts

router.post('/onlinePay/save',(req,res)=>{
    let newPost = new Posts(req.body);

    //save
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
           success:"Posts Saved Successfully"
        });

    });
});
//get post

router.get('/onlinePay',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOnline:posts
        });
    });
});


//get a specifi post

router.get("/onlinePay/:id",(req,res)=>{
   let postId = req.params.id;

   Posts.findById(postId,(err,post)=>{
       if(err){
           return res.status(400).json({success:false,err});
       }

       return res.status(200).json({
           success:true,
           post
       });
   });
})









//update

router.put('/onlinePay/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
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

router.delete('/onlinePay/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Deleted UN Successfully",err
        });

        return res.json({
            message:"Delete Successfully",deletedPost
        });
    });
});

module.exports = router;