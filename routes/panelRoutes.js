import express from 'express'

const router = express.Router()

import  {
    createPanel,
    getAllPanels,
    }  from '../controllers/panelController.js';

router.post("/createPanel", createPanel);
router.get("/allPanels", getAllPanels);


export default router