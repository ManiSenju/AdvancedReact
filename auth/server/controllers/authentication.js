const User = require('../models/user.js')
const jwt = require('jwt-simple')
const config = require('../config.js')

function generateToken(user){
    const timeStamp = new Date().getTime()
    return jwt.encode({sub:user.id,iat:timeStamp},config.secret)
}

exports.signIn = function(req,res,next){
    // user validation is done , return token
    //passport will add done params to request obj
    res.json({token:generateToken(req.user)})
}

exports.signUp = function(req,res,next){
    if(!req.body.email || !req.body.password){
        return res.status(422).send({error:"Credentails are required"})
    }
    User.findOne({'email':req.body.email},(err,user)=>{
        if(err){
            return next(err)
        }
        if(user){
            return res.status(422).send({error:"Email already exists"})
        }
        const newUser = new User({
            email:req.body.email,
            password:req.body.password
        })
        newUser.save().then((user)=>{
            res.json({token:generateToken(user)})
        }).catch((e)=>{
            next(e)
        })
    })
}