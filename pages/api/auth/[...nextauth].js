import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

export default NextAuth({
    pages:{
        signIn:"/login"
    },
    //Configure JWT
    session: {
        jwt: true,
    },
    //Specify Provider
    providers: [
        CredentialsProvider({
            async authorize(credentials,req) {
                // connect to database 
                const client = await MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

                // geting all users 
                const users = await client.db().collection('users');
                //Find user with the email  
                const result = await users.findOne({
                    email: credentials.email,
                });
                

                //Not found - send error res
                if (!result) {
                    client.close();
                    
                    throw new Error('No user found with the email');
                }
                
                //Check hased password with DB password
                const checkPassword = await compare(credentials.password, result.password);
                //Incorrect password - send response
                if (!checkPassword) {
                    client.close();
                    
                    throw new Error('Password doesnt match');
                }
                console.log("rishabh3");
                //Else send success response
                client.close();
                let user  = {...result,password:""};
                
                return {email:result.email,rollno:result.registration_number};

            },
        }),
    ],
});