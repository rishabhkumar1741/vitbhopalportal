

import dbConnect from '../../../database/conn';
import Hostel from '../../../model/Hostel'

export default async function (req, res) {

    if (req.method !== 'POST') {
        
        res.status(400).json({ "hasError": true, "erroeMessage": "Invalid Request" })
    }
    else {
        

        try {
          
            // create connection
            await dbConnect();
      
        
         

            const hostelissue =  new Hostel({ ...req.body })
            const saveissue = await hostelissue.save();
            console.log(saveissue);
            if (saveissue) {

                res.status(201).json({ "hasError": false, "data": saveissue })
            }
            else {
                res.status(400).json({ "hasError": true, "erroeMessage": "SomeThing went wrong" })
                
            }

        } catch (error) {
            res.status(400).json({ "hasError": true, "erroeMessage": error })
        }


    }

}
 