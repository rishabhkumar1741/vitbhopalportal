import { Schema,model, models } from "mongoose";

const userSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    city:String,
    zip:String
})

const Users =models.users|| model('users',userSchema);

export default Users;

 