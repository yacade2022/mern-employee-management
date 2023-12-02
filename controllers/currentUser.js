import { StatusCodes } from "http-status-codes"
import User from '../models/User.js'

export const getCurrentUser = async(req,res)=>{
    
    const user = await User.findOne({_id:req.user.userId})
    const newUser = user.sendWithoutPassword()
    res.status(StatusCodes.OK).json({user:newUser})
}


//*******profile****/
export const updateUser = async(req,res)=>{
    const{name,email,password} = req.body
    
    const user = await User.findOne({_id:req.user.userId})
    user.name = name
    user.email = email
    user.password = password

    await user.save()
    

    res.status(StatusCodes.OK).json({msg:'user updated'})
}