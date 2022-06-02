import express from 'express'

const router = express.Router()

import { createSubType, deleteSubType, getAllSubTypes } from '../controllers/subTypeController.js';

router.post("/createSubType", createSubType)
router.get("/allSubTypes", getAllSubTypes)
router.delete("/deleteSubType/:id",deleteSubType)


export default router