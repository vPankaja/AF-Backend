import express from 'express'

const router = express.Router()

import  {allocatePMember, getAllAllocatePanels, deleteAllocatePanel}  from '../controllers/allocatePanelController.js';

router.post("/allocatePM", allocatePMember)
router.get("/allAPmembers", getAllAllocatePanels)
router.delete("/deleteAPmember/:id",deleteAllocatePanel)


export default router