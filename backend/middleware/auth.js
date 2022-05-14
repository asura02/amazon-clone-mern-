const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");


exports.isAuthenticatedUser = catchAsyncErrors( async(req,res,next)=>{
    const {token} = req.cookies;
    
    if(!token){
        return next(new ErrorHander("please login to access this resourse",401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET)  
    req.user = await User.findById(decodedData.id)
 
    next()
   
})

exports.authorizedRoles = (...roles) =>{

    return (req,res,next)=>{
      
        if(!roles.includes(req.user.role)){
           return next(new ErrorHander(`Role: ${req.user.role} is not allowed `,403) )
        }
        next();

    }

}