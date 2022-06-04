import express from 'express'
const  router = express.Router()

import { createStudent, getStudents, createGroup, getGroups, checkStudentinGroup, checkStudentGroup, getTopicByGroup, assignCoSup, getResearchByID, updateResearch, registerTopic } from '../controllers/studentController.js'

router.post('/registerStudent', createStudent);
router.get('/allStudents', getStudents);
router.get('/allGroups', getGroups);
router.post('/registerGroup', createGroup);
router.get('/studentinGroup', checkStudentinGroup);
router.post('/registerTopic', registerTopic);
router.get('/getGroup/:email', checkStudentGroup);
router.get('/getResearchByGroup/:groupName', getTopicByGroup);
router.post('/assingCoSup', assignCoSup);
router.get('/getResearchById/:id', getResearchByID)
router.put('/updateResearch/:id', updateResearch)

export default router;