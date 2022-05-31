import express from 'express'
const  router = express.Router()
import { authUser, deleteUser, getAllUsers, getUserById, registerUser, updateUser } from '../controllers/userController.js'

router.post('/login', authUser)
router.post('/reg', registerUser)
router.get('/allusers', getAllUsers)
router.get('/get/:id',getUserById)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser);

export default router