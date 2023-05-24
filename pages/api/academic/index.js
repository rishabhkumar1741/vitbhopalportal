
import { errorHandler } from '../../../utils/common'
import dbConnect from '../../../database/conn';

import Academic from '../../../model/Academic'
export default async function (req, res) {
    if (req.method !== 'POST') {
        res.status(400).json({ "hasError": true, "erroeMessage": "Invalid Request" })
    }
    else {

        try {
            // create connection
            await dbConnect();


            const hostelissue = new Academic({ ...req.body })
            const saveissue = await hostelissue.save();
            console.log(saveissue);
            if (saveissue) {

                res.status(201).json({ "hasError": false, "data": saveissue })
            }
            else {
                errorHandler("SomeThing went wrong", res);
            }

        } catch (error) {
            res.status(400).json({ "hasError": true, "erroeMessage": error })
        }


    }

}
