import { response } from 'express'
import express from 'express'
//const req = require('express/lib/request');
//const res = require('express/lib/response');

import PanelEve from '../models/PanelEveModel.js';

const router=express.Router();

//to Save Posts

router.post('/savePost',(req,res)=>{
    let newPost =new PanelEve(req.body);

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

//to get all details

router.get('/GetAlldetails',(req,res)=>{
    PanelEve.find().exec((err,GetAllposts)=>{
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

    PanelEve.findById(DetailID,(err,getOneDetail)=>{
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




//to update details

router.put('/stdDetail/update/:id',(req,res)=>{
    PanelEve.findByIdAndUpdate(
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
router.delete('/stdDetails/delete/:id',(req,res)=>{
    PanelEve.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({message:"Delete successfull", deletedDetails});
    });
});







export default router;
