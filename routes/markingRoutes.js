import express from 'express'

const router = express.Router()

import  {createMarking, deleteMarking, getAllMarkings}  from '../controllers/markingController.js';

router.post("/createMarking", createMarking)
router.get("/allMarkings", getAllMarkings)
router.delete("/deleteMarking/:id",deleteMarking)


export default router