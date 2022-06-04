import express from 'express'

const router = express.Router()

import  {allocatePMember, getAllAllocatePannels, deleteAllocatePannel}  from '../controllers/allocatePannelController.js';

router.post("/allocatePM", allocatePMember)
router.get("/allAPmembers", getAllAllocatePannels)
router.delete("/deleteAPmember/:id",deleteAllocatePannel)


export default router