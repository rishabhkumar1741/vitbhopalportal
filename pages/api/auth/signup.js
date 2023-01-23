import connectMongo from "../../../database/conn"
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";
export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ erroe: "Connection Fail" }));

    //only post method
    if (req.method === 'POST') {
        if (!req.body) {
            return res.status(404).json({ erroe: "Dont have form data" })
        }
        const { fname, lname, password, email, city, zip } = req.body;
        const checkexisting = await Users.findOne({ email });
        if (checkexisting) {
            return res.status(422).json({ message: "User already exists" })
        }
        Users.create({ fname, lname, email, city, zip, password: await hash(password, 12) }, function (err, data) {
            if (err) {
                return res.status(404).json({ err });
            }
            res.status(201).json({ status: true, user: data })

        })
    }
    else {
        res.status(500).json({ message: "HTTP method not valid only post accepted" })
    }
}