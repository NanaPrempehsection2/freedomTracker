const mongoose =require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{type: String, required: false},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
});

userSchema.pre('save',async function (next){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
//jwt
userSchema.methods.getSignedJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}
//Match user entered password to compare
userSchema.methods.matchPassword=async  function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


module.exports = mongoose.model('User', userSchema);
