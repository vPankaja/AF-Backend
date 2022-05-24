import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateTokens.js'
import Admin from '../models/adminModel.js'


//Admin Login
const authAdmin = asyncHandler(async(req, res) => {
    const { email, password } = req.body

   const admin = await Admin.findOne({ email })

   if(admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            nic: admin.nic,
            gender: admin.gender,
            contactNo: admin.contactNo,
            email: admin.email,
            token: generateToken(admin._id),
        })
   } else {
       res.status(401)
       throw new Error('Invalid email or password')
   }

})

//Admin Registration 
const registerAdmin = asyncHandler(async(req, res) => {
    const { name, nic, gender, contactNo, email, password } = req.body

   const adminExists = await Admin.findOne({ email })

   if(adminExists) {
       res.status(400)
       throw new Error('Admin already exists')
   }

   const admin = await Admin.create({
       name,
       nic,
       gender,
       contactNo,
       email,
       password
   })

   if(admin) {
       res.status(201).json({
        _id: admin._id,
        name: admin.name,
        nic: admin.nic,
        gender: admin.gender,
        contactNo: admin.contactNo,
        email: admin.email,
        token: generateToken(admin._id),
       })
   } else {
       res.status(400)
       throw new Error('Invalid admin data')
   }

})

// get Admin profile
const getAdminProfile = asyncHandler(async(req, res) => {
    const admin = await Admin.findById(req.admin._id)
 
    if(admin){
        res.json({
         _id: admin._id,
         name: admin.name,
         nic: admin.nic,
         gender: admin.gender,
         contactNo: admin.contactNo,
         email: admin.email,
        })
         
    }else {
        res.status(404)
        throw new Error('Admin not found')
    }
 
 })
 
 export { authAdmin, getAdminProfile, registerAdmin }