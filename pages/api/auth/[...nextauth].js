import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../database/conn'
import { compare } from 'bcryptjs';
import User from '../../../model/User'

export default NextAuth({
        //Specify Provider
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { Email, Password } = credentials;
                
                // geting all users 
                await dbConnect();
                const authuser = await User.findOne({ "Email": Email }).exec();
              
                const userDoc = authuser._doc;
                
                console.log(userDoc);
                

                const isMatched = await compare(Password, userDoc.Password);
                if (isMatched) {
                    return {
                        "email": Email,
                        "name":{...userDoc,Password:""},
                        
                    
                        
                    };
                }
                else {
                    return null;
                }

            }
        })
    ],
    secret:process.env.SECRET,
    database:process.env.MONGO_URL,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/login",
    },

});






