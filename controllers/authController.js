import { UnauthenticatedError } from '../errors/customeError.js'
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    
    
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({msg:'user created'})
}


export const login = async(req,res)=>{
    const{email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('email invalid')
    }

    const verifyPassword = await user.comparePassword(password)
    if(!verifyPassword){
        throw new UnauthenticatedError('password invalid')
    }

    const token = jwt.sign({userId:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:"80d"})

    const oneDay = 1000 * 60 * 60 * 24

    res.cookie("token",token,{
        httpOnly:true,
        expires: new Date(Date.now() + oneDay ),
        secure: process.env.NODE_ENV === "production",

    })

    res.status(StatusCodes.OK).json({msg:'user logged in'})

}


export const logout = async(req,res)=>{
    res.cookie('token','logout',{
        httpOnly:true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg:'user logged out'})
}