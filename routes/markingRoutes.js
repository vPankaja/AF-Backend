import express from 'express'

const router = express.Router()

import  {createMarking}  from '../controllers/markingController.js';

router.post("/createMarking", createMarking)


export default router