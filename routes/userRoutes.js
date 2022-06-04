import express from 'express'
const  router = express.Router()
import { authUser, deleteUser, getAllUsers, getUserProfile, getUserById, registerUser, updateUser, getpanelMembers } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.post('/reg', registerUser)
router.get('/profile', protect, getUserProfile)
router.get('/allusers', getAllUsers)
router.get('/allPanel', getpanelMembers)
router.get('/get/:id',getUserById)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser);

export default router