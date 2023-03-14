import { Schema,model,models } from "mongoose";

const userschema = new Schema({
    FirstName :{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    }
})

const Users = models.users || model("users",userschema);

export default Users;