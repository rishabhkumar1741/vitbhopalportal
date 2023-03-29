import User from '../../model/User';
import dbConnect from '../../database/conn'
export default async function handler(req, res) {
if(req.method=='POST')
{
    const Email = req.body.Email;
    console.log(Email);
    
    try {
        //connection to database
        await dbConnect();

    const user = await User.findOne({ Email: Email }).exec();
    
    if (user) {
        const userDoc = user._doc;
        delete userDoc.Password
        res.status(201).json({ "hasError": false, "data": userDoc })

    }
    else {
        res.status(400).json({ "hasError": true, "erroeMessage": "SomeThing went wrong" });
    }
        
    } catch (error) {
        console.log("RUN");
        res.status(400).json({ "hasError": true, "erroeMessage": error })
    }


}else{
    res.status(400).json({ "hasError": true, "erroeMessage": "invalid request" })
}










}

