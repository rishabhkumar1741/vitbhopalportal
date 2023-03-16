
import { hash } from 'bcryptjs';
import { errorHandler,validateAllSignInFields,responseHandle } from '../../../utils/common';
import dbConnect from '../../../database/conn'
import User from '../../../model/User';

async function handler(req, res) {
    if(req.method!="POST")
    {
        errorHandler("Invalid Request",res);
    }else{
   try{
    console.log(1);
    // validate the fields
    validateAllSignInFields(req.data)
    //make connection with database
    await dbConnect();
    console.log(2);
    const hashpassword = await hash(req.body.Password,8);

    const user  = new User({...req.body,Password:hashpassword});
    const saveUser = await user.save();
    console.log(3);
    
    if(saveUser)
    {
        console.log(4);
        const userDoc = saveUser._doc;
        delete userDoc.Password;
        responseHandle(userDoc,res,201);
        console.log(5);
    }
    else{
        errorHandler("SomeThing went wrong",res);
    }

   }
   catch(error)
   {
    console.log(6);
    errorHandler(error,res);
   }
}

}

export default handler;












// if (req.method === 'POST') {
//     //Getting email and password from body
//     const { email, password, fname, lname, registration_number } = req.body;
//     console.log(req.body);
//     // validation
//     if (!email || !email.includes('@') || !password) {
//         res.status(422).json({ message: "Invalid Data" });
//         return;
//     }

//     // connect to database 
//     const client = await MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = client.db();
//     //check existing 

//     const checkExisting = await db.collection('users').findOne({ email: email });
//     //send error response if duplicate user is found 
//     if (checkExisting) {
//         res.status(422).json({ message: "User already exists" })
//         client.close();
//         return;
//     }

//     // hash passwaord

//     const hashpassword = await hash(password, 12)
//     const status = await db.collection('users').insertOne({
//         ...req.body,
//         password: hashpassword

        
//     });

//     //send success response
//     res.status(201).json({ message: "User created", ...status })

//     client.close();
// }
// else {
//     res.status(500).json({ message: "Route not valid " });
// }