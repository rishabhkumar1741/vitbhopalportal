
import CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(erroe=>{error:"connection failed...!"})

                const result = await Users.findOne({email:credentials.email})
                if(!result)
                {
                    throw new Error("No User Found with Email Please Sign-up...!")
                }

                const cpassword = await compare(credentials.password,result.password)

                if(!cpassword||result.email!==credentials.email)
                {
                    throw new Error("Username and Password doesn't match ");
                }
                return result;

            }
        })
    ],
    secret:"bxxiBIOpHw7qRRqGhlJDejf9XWcn4i6gGBr9v7j5nys="
})


