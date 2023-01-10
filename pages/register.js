import Link from "next/link";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";
export default () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
            city: "",
            zip: ""
        },
        validate: registerValidate,
        onSubmit
    })
    async function onSubmit(values) {
        const options={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }
        await fetch('http://localhost:3000/api/auth/signup',options)
        .then(res=>res.json())
        .then((data)=>{
            if(data){
                router.push('http://localhost:3000')
            }
        })
    }
    return (
        <div className="grid h-screen place-items-center ">
            <div className="shadow-2xl p-10 rounded-2xl">
                <form onSubmit={formik.handleSubmit} className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className= {`w-full md:w-1/2 px-3 mb-6 md:mb-0 `  } >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input {...formik.getFieldProps('fname')} name="fname" className={`${formik.errors.fname && formik.touched.fname?'border-rose-500':'' }  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`  }id="grid-first-name" type="text" placeholder="Jane" />
                            
                            <p className="text-blue-500 text-xs italic">Please fill out this field.</p>
                            
                        </div>
                      
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input {...formik.getFieldProps('lname')} name="lname" className={`${formik.errors.lname && formik.touched.lname ?'border-rose-500' : ''} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />
                            
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 ">
                            <label className="  block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input {...formik.getFieldProps('password')} name="password" className={`${formik.errors.password && formik.touched.password ? 'border-rose-500' :'border-gray-200'}   appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500` } id="grid-password" type="password" placeholder="******************" />
                            
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input {...formik.getFieldProps('email')} name="email" className={`${formik.errors.email && formik.touched.email ? 'border-rose-500' :'border-gray-200'} appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-email" type='email' placeholder="Email" />
      
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input {...formik.getFieldProps('city')} name="city" className={`${formik.errors.city && formik.touched.city ? 'border-rose-500' :'border-gray-200'} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-city" type="text" placeholder="Albuquerque" />
                            
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input {...formik.getFieldProps('zip')} name="zip" className={`${formik.errors.zip && formik.touched.zip ? 'border-rose-500' :'border-gray-200'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-zip" type="text" placeholder="90210" />
                            
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-blue-500 mt-4">
                        <button className="p-2 text-white font-bold w-full " type='submit'>submit </button>
                    </div>
                    <div>

                    </div>
                </form>
                <div className="flex justify-center items-center mt-6 ">
                    <span className="mr-2 font-light text-gray-500">Have an account? </span><Link className="text-blue-500" href='/login'>Sing in</Link>
                </div>
            </div>

        </div>


    )


}