const passport = require('passport')
const Authentication = require("./controllers/authentication")
const PassportService = require('./services/passport.js')

const requiredAuth = passport.authenticate('jwt',{session:false})
const requiredSignin = passport.authenticate('local',{session:false})

module.exports = function(app){
    app.get('/',requiredAuth,(req,res)=>{
        res.send('hi there')
    })
    app.post('/signin',requiredSignin,Authentication.signIn)
    app.post('/signup',Authentication.signUp)
}