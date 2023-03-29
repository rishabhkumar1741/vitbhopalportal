
import { hash } from 'bcryptjs';
import { errorHandler, validateAllSignInFields, responseHandle } from '../../../utils/common';
import dbConnect from '../../../database/conn'
import User from '../../../model/User';

async function handler(req, res) {
    if (req.method != "POST") {
        res.status(400).json({ "hasError": true, "erroeMessage": "Invalid Request" });
    } else {
        try {

            // validate the fields
            // validateAllSignInFields(req.data)
            //make connection with database
            await dbConnect();

            const hashpassword = await hash(req.body.Password, 8);

            const user = new User({ ...req.body, Password: hashpassword });
            const saveUser = await user.save();


            if (saveUser) {
               
                const userDoc = saveUser._doc;
                delete userDoc.Password;

                res.status(201).json({ "hasError": false, "data": userDoc })
            }
            else {
                res.status(400).json({ "hasError": true, "erroeMessage": "SomeThing went wrong" });
            }

        }
        catch (error) {

            res.status(400).json({ "hasError": true, "erroeMessage": error })
        }
    }

}

export default handler;












