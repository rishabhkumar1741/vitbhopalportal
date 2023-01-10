import Head from "next/head"
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaGithub, FaSignInAlt } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import Link from "next/link"
import { useState } from "react"
import { useFormik } from 'formik'
import login_validate from "../lib/validate"
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/router"




export default function Login() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: login_validate,
        onSubmit: onSubmit
    })
    console.log(formik.errors);

    async function onSubmit(values) {
        const status = await signIn('credentials',{
            redirect:false,
            email:values.email,
            password:values.password,
            callbackUrl:'/'
        }
        )
        if(status.ok)
        {
            router.push(status.url)
        }
    }


    return <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
            <title>VIT Bhopal: Log in or Sign up</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
                <div className="w-3/5 p-5 ">
                    <div className="text-left font-bold">
                        <span className="text-green-500">VIT </span>BHOPAL
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                            <button type="button" className="border-2 border-grey-200 rounded-full p-3 mx-1">
                                <FaGithub className="text-sm" />
                            </button>

                            <button type='button' className="border-2 border-grey-200 rounded-full p-3 mx-1">
                                <FaGoogle className="text-sm" />
                            </button>

                            <button type='button' className="border-2 border-grey-200 rounded-full p-3 mx-1">
                                <FaLinkedinIn className="text-sm" />
                            </button>
                        </div>
                        <p className="text-gray-400 my-3">or use your email account  </p>
                        <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
                            <div className={`${formik.errors.email && formik.touched.email ?'':''}bg-gray-100 w-64 p-2    flex items-center mb-3`}>
                                <FaRegEnvelope className="text-gray-400 m-2" />
                                <input {...formik.getFieldProps('email')} type="email" name="email" 
                                placeholder="Email" className="bg-gray-100 outline-none flex-1" />
                                
                            </div>
                            <div className="mb-1">
                            
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                                <MdLockOutline className="text-gray-400 m-2" />
                                <input {...formik.getFieldProps('password')} type="password" name="password" placeholder="password" className={`${formik.errors.email && formik.touched.email ? 'border-rose-500' :'border-gray-200'} bg-gray-100 outline-none flex-1`} />
                                
                            </div>
                            <div className="mb-1">
                            {formik.errors.password && formik.touched.password ?<span className="text-red-500">{formik.errors.password}</span>:<></>}
                            </div>
                            <div className="flex justify-between w-64 mb-5">
                                <label className="flex items-center text-xs"> <input type='checkbox' name="remember" className="mr-1" /> Remember me</label>
                                <a href="#" className="text-xs" >Forget Password</a>
                            </div>
                            <button type='submit' className="border-2 border-green-500  text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white ">
                                login
                            </button>


                        </form>
                    </div>



                </div>
                <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2"> Hello, Friend! </h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-10">
                        Fill up personal information and start journey with us.
                    </p>
                    <Link href='/register' legacyBehavior>
                        <a className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 ">
                            Sign up
                        </a>

                    </Link>

                </div>

            </div>

        </main>


    </div>
}