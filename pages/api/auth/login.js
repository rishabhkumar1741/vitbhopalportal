import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import { hash } from 'bcryptjs';
import Jwt  from 'jsonwebtoken';
import { compare } from "bcryptjs";


export default async function Login(req,res)
{
    connectMongo().catch(erroe=>res.json({ erroe: "Connection Fail" }));
    if(req.method==='POST')
    {
        if(!req.body){
            return res.status(404).json({ erroe: "Dont have form data" })
        }
        const {email,password}= req.body;
        let user = await Users.findOne({email:email});
        if(user)
        {
            if(user.email==email && await compare(password,user.password))
            {
                const token = Jwt.sign({"user":user.fname,"email":email},'rishabh', { expiresIn: 1 });
                console.log(token);
                return res.status(200).json({"status":"ok","token":token})
            }
            else{
                return res.status(200).json({"status":"","error":"user name or password was incorrent "})
            }
        }
        else{
            return res.status(200).json({"status":"","message":"User not found"});
        }
    }
    else{
        return res.status(400).json({"status":"","message":"wrong request"});
    }

    
}