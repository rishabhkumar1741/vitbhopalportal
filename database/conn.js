import mongoose from "mongoose";
mongoose.set('strictQuery', true);


global.mongoose = {
    conn:null,
    promise:null
}

export default async function dbConnect()
{
    if(global.mongoose && global.mongoose.conn)
    {
        return global.mongoose.conn;
    }else{
        
        const promise = mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            autoIndex:true
        }).then((monngose)=>mongoose);
        global.mongoose= {
            conn:await promise,
            promise,
        }
      

        return await promise;
    }
}




// mongodb.js

