import mongoose from "mongoose";

mongoose.set('strictQuery', true);
const connectMongo = async ()=>{
    try {
        
        const {connect} = await mongoose.connect(process.env.MONGO_URL,()=>{
            console.log("rishabh");
        })

        if(connect.readyState==1)
        {
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;


