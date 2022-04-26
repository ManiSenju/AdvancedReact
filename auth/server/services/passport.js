const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const User = require('../models/user.js')
const config = require('../config.js')

//create local strategy
const localStrategyOptions = {usernameField:'email'}
const localLogin = new LocalStrategy(localStrategyOptions,function(email,password,done){
    //verify email and password
    console.log("22222222222222222222222222222222")
    User.findOne({email:email},function(err,user){
        if(err){
            return done(err,false)
        }
        if(!user){
            return done(null,false)
        }
        console.log(user)
        //compare password with user.password
        user.comparePassword(password,(err,isMatch)=>{
            if(err){
                return done(err,false)
            }
            if(!isMatch){
                return done(null,false)
            }
            return done(null,user)
        })

    })
})

//settup jwt strategies
const jwtOptions ={
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
    //see if userid in payload exists in db
    // if exists call done with user obj , if not call done with null
    User.findById(payload.sub,function(err,user){
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null,user)
        }else{
            return done(null,false)
        }
    })
})

//tell passport to use strategy
passport.use(jwtLogin)
passport.use(localLogin)