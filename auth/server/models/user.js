const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

// define a model
const userSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String
    }
})


//hash the password before saving 
userSchema.pre('save',async function(next){
    const user = this
    bcrypt.genSalt(10,function(err,salt){
        if(err){
            return next(err)
        }
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err){
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(password,callback){
    bcrypt.compare(password,this.password,function(err,isMatch){
        if(err){
            return callback(err)
        }
        callback(null,isMatch)
    })
}

//create model class

const ModelClass = mongoose.model('user',userSchema)

//export model class
module.exports = ModelClass