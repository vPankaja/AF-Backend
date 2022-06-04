import express from "express";
import getTopics from '../models/researchTopicModel.js';
const router = express.Router();

router.get('/GetTopics', (req, res) => {
    getTopics.find().exec((err, GetAllTopics) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingTopics: GetAllTopics
        })
    })
})

router.get("/getOneTopic/:id", (req, res) => {
    let TopicID = req.params.id;

    getTopics.findById(TopicID, (err, getOneTopic) => {
        if (err) {
            return res.status(400).json({
                success: false,
                err
            })
        }
        return res.status(200).json({
            success: true,
            getOneTopic
        });
    });
});

router.put('/updateTopic/:id', (req, res) => {

    const query1 = {
        "_id": req.params.id,

    }
    const query2 = {
        "status": req.body.status
    }

    getTopics.updateOne(query1, query2).then(dbRes => {
        return res.status(200).json({
            success: "updated"
        });
    }).catch(error => {
        return res.status(400).json({
            error: error
        });
    })
})


export default router