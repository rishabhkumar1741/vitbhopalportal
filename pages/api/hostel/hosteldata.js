import { data } from 'autoprefixer';
import connectMongo from '../../../database/conn'
import hostel from '../../../model/Hostel';

export default async function (req, res) {
    
    connectMongo(); // CONECTION WITH DATABASE
    
    if (req.method == "POST") {
        if (req.body) {
            
            const { fname, lname, email, hostelno, roomno, category, reason, desc } = req.body;
            
            const datares = await hostel.create({ FirstName: fname, LastName: lname, HostelNumber: hostelno, RoomNumber: roomno, Email: email, Category: category, Reason: reason, Description: desc });
            console.log(datares);
            if(datares)
            {
                res.status(201).json({ "message":" created","created":true})
            }
            else{
                res.status(400).json({ "message":" error api"})
            }   
        }
    }
    else{
        res.status(401).json({ "message":" only post method is allowed"})
         
    }
    
}


// export default async function handler(req, res) {


//     if (req.method === 'POST') {
//         if (!req.body) {
//             return res.status(404).json({ error: "Dont have form data" })
//         }
//         const { fname, lname, hostelNo, roomNo, email, category, reason, description } = req.body;
//         await Complaint.create({ fname, lname, hostelNo, roomNo, email, category, reason, description }, function (err, data) {
//             if (err) {
//                 return res.status(404).json({ err });
//             }
//             res.status(201).json({ status: true, user: data })

//         })
//     }
//     else {
//         res.status(500).json({ message: "HTTP method not valid only post accepted" })
//     }
// }




