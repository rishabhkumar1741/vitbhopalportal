import { Schema,model,models } from "mongoose";

const userschema = new Schema({
    FirstName :{
        type:String,
        require:true,
        trim:true
    },
    LastName:{
        type:String, 
        require:true,
        trim:true
    },
    Password:{
        type:String,
        require:true,
        trim:true
    },
    Email:{
        type:String,
        required: [true, "email field is not provided. Cannot create user without email "],
        trim:true,
        unique: [true, "email already exists in database!"],
        lowercase: true,
        message: '{VALUE} is not a valid email!'

    },
    Registration_Number:{
        type:String,
        require:true,
        trim:true,
        index: { unique: true }
    },
    created: {
        type: Date,
        default: Date.now
      }
})

const Users = models.users || model("users",userschema);

export default Users;