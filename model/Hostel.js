import { Schema,model,models } from "mongoose";

const hostelschema = new Schema({
    FirstName :{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    HostelNumber:{
        type:String,
        require:true
    },
    RoomNumber:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Category:{
        type:String,
        require:true
    },
    Reason:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    }
})

const hostel = models.hostel || model("hostel",hostelschema);

export default hostel;