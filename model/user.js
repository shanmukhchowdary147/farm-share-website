const mongoose= require('mongoose');
const userSchema = mongoose.Schema({

    name: {
        type:String,
        maxlenght:58
    },
    email: {
        type:String,
        trim:true,
        unique:1
    },
    password: {
        type:String,
        minlength:5
    },
    phone: {
        type:Number,
        minlength:10,
        maxlenght:10,
        unique:1
    },
    lastname:{
        type:String,
        maxlenght:58
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String   
    },
    tokenExp:{
        type:Number 
    }
})

const User = mongoose.model('User',userSchema)
module.exports = {User}