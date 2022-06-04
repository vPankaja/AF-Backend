import express from 'express'
const  router = express.Router()

import { saveDocInDB } from '../controllers/documentSaveController.js'

router.post('/saveDoc', saveDocInDB);

export default router;
