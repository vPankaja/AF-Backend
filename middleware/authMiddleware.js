import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'


const protect = asyncHandler(async(req, res, next) => {
    let token

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try{
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.admin = await Admin.findById(decode.id).select('-password')
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error ('Not authorized, no token')
    }

    next()

})

export{ protect }