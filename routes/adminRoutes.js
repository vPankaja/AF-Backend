import express from 'express'
const  router = express.Router()
import { authAdmin, getAdminProfile, registerAdmin } from '../controllers/adminController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authAdmin)
router.post('/', registerAdmin)
router.get('/profile', protect, getAdminProfile)

export default router