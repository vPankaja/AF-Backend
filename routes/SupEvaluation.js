import { response } from 'express'
import express from 'express'


import docEvaluation from '../models/SupEvaluation.js'

const router=express.Router();

//SaveDetails

router.post('/saveDetails',(req,res)=>{
    let newPost =new docEvaluation(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Saved successfullu"
        });
    });
});

//get all details

router.get('/GetAlldetails',(req,res)=>{
    docEvaluation.find().exec((err,GetAllposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDocs:GetAllposts
        });
    });
});

//get a speciic detail

router.get("/getOneDetail/:id",(req,res)=>{
    let DetailID = req.params.id;

    docEvaluation.findById(DetailID,(err,getOneDetail)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err     })
        }
        return res.status(200).json({
            success:true,
            getOneDetail
        });
    });
});




//update specific details

router.put('/update/:id',(req,res)=>{
    docEvaluation.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,stdDetails)=>{
            if(err){
                return response.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"updated"
            });
        }
    );
});


//delete specific details
router.delete('/delete/:id',(req,res)=>{
    docEvaluation.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({message:"Delete successfull", deletedDetails});
    });
});







export default router;
