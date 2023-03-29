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
                console.log({ Email, Password });

                console.log("start run login process");
                // geting all users 
                await dbConnect();
                const authuser = await User.findOne({ "Email": Email }).exec();
                console.log("authuser", authuser);
                const userDoc = authuser._doc;
                console.log("userDoc", userDoc);

                const isMatched = await compare(Password, userDoc.Password);
                if (isMatched) {
                    return {
                        "email": Email,
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
    // callbacks:{
    //     async jwt(token,user)
    //     {
            
    //         token.ids = 1741
            
    //         return token
    //     },
    //     async session(session,token)
    //     {
    //         session.user.ids = token.ids;
    //         return session 
    //     },
    // },
});






