import express from 'express'

const router = express.Router()

import  {uploadDocument}  from '../controllers/documentController.js';

router.post("/uploadDocument", uploadDocument)
// router.get("/allDocuments", getAllDocuments)
// router.delete("/deleteDocument/:id",deleteDocument)


export default router