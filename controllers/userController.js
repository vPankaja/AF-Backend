import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateTokens.js'
import User from '../models/userModel.js'


//User Login
const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

   const user = await User.findOne({ email })

   if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            nic: user.nic,
            gender: user.gender,
            contactNo: user.contactNo,
            email: user.email,
            type: user.type,
            token: generateToken(user._id),
        })
   } else {
       res.status(401)
       throw new Error('Invalid email or password')
   }

})

//User Registration 
const registerUser = asyncHandler(async(req, res) => {
    const { name, nic, gender, contactNo, email, password,type } = req.body

   const userExists = await User.findOne({ email })

   if(userExists) {
       res.status(400)
       throw new Error('User already exists')
   }

   const user = await User.create({
       name,
       nic,
       gender,
       contactNo,
       email,
       password,
       type
   })

   if(user) {
       res.status(201).json({
        _id: user._id,
        name: user.name,
        nic: user.nic,
        gender: user.gender,
        contactNo: user.contactNo,
        email: user.email,
        type: user.type,
        token: generateToken(user._id),
       })
   } else {
       res.status(400)
       throw new Error('Invalid user data')
   }

})

//get All Users
const getAllUsers = asyncHandler(async (req, res) => {
    const user = await User.find({});
    res.json(user);
  });


// get User by ID
const getUserById = asyncHandler(async(req, res) => {
  // let userID = req.params.id;
  //    await User.findById(userID)
  //     .then(() => {
  //       res.status(200);
  //     })
  //     .catch(() => {
  //       console.log();
  //       res.status(500);
  //     });
  // });

    const user = await User.findById(req.params.id)
 
    if(user){
        res.json({
         _id: user._id,
         name: user.name,
         nic: user.nic,
         gender: user.gender,
         contactNo: user.contactNo,
         email: user.email,
         type: user.type,
        })
         
    }else {
        res.status(404)
        throw new Error('User not found')
    }
 
 })

 const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (user) {
      await user.remove();
      res.json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  });
  
  const updateUser = asyncHandler(async (req, res) => {
    const {
        name,
        nic,
        gender,
        contactNo,
        email,
        password,
        type
    } = req.body;
  
    const user = await User.findById(req.params.id);
  
    if (user) {
      (user.name = name),
        (user.nic = nic),
        (user.gender = gender),
        (user.contactNo = contactNo),
        (user.email = email),
        (user.password = password),
        (user.type = type);
  
      const updateUser = await user.save();
      res.json(updateUser);
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  });
 
 export { authUser, getUserById, registerUser, getAllUsers, updateUser, deleteUser }