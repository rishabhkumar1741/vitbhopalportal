
import dbConnect from '../../../database/conn'
import Hostel from '../../../model/Hostel';
export default async function productsHandler(req, res) {
    if (req.method == 'GET') {
        const { Email } = req.query;
        console.log(Email, "<=email");

        try {
            //connection to database
            
            await dbConnect();

            const data = await Hostel.find({ email: Email }).exec();
            
            if (data) {
                res.status(201).json({ "hasError": false, "data": data })
            }
            else {
                res.status(400).json({ "hasError": true, "erroeMessage": "SomeThing went wrong" });
            }

        } catch (error) {
            res.status(400).json({ "hasError": true, "erroeMessage": "cannot connect to database" })
        }
    }
    else {
        res.status(400).json({ "hasError": true, "erroeMessage": "wrong request" })
    }
}