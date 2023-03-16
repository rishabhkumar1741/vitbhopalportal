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
        console.log("New connection");
        return global.mongoose.conn;
    }else{
        console.log("old connection");
        const promise = mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            autoIndex:true
        }).then(monngose=>mongoose);
        global.mongoose= {
            conn:await promise,
            promise
        }

        return await promise;
    }
}


 