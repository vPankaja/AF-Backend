import express from 'express'
const  router = express.Router()

import { createStudent, getStudents, createGroup, getGroups, checkStudentinGroup, registerTopic } from '../controllers/studentController.js'

router.post('/registerStudent', createStudent);
router.get('/allStudents', getStudents);
router.get('/allGroups', getGroups);
router.post('/registerGroup', createGroup);
router.get('/studentinGroup/:email', checkStudentinGroup);
router.post('/registerTopic', registerTopic);

export default router;