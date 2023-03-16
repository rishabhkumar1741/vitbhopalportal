import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function  Register() {
    const router = useRouter();
    const [userdata, setuserdata] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        Registration_Number: "",
       
    });
    function formdatainput(event) {
        const name = event.target.name;
        const value = event.target.value;
        setuserdata((pre) => {
            return { ...pre, [name]: value }
        }
        )
       
    }
    async function formSubmit(event) {
        event.preventDefault();
        
        const option = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        }
        const res = await fetch('http://localhost:3000/api/auth/signup', option);
        const data = await res.json();
        if(!data.hasError)
        {
            router.push('/login');
        }
        else{
            router.push('/register');
        }
        
        
    }

    return (
        <div className="grid h-screen place-items-center ">
            <div className="shadow-2xl p-10 rounded-2xl">
                <form onSubmit={formSubmit} className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input value={userdata.FirstName} onChange={formdatainput} name="FirstName" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" />

                            <p className="text-blue-500 text-xs italic">Please fill out this field.</p>

                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input value={userdata.LastName} onChange={formdatainput} name="LastName" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 ">
                            <label className="  block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Password">
                                Password
                            </label>
                            <input value={userdata.Password} onChange={formdatainput} name="Password" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-Password" type="Password" placeholder="******************" />

                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you&apos;d like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Email">
                                Email
                            </label>
                            <input value={userdata.Email} onChange={formdatainput} name="Email" className={` appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-Email" type='Email' placeholder="Email" />

                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you&apos;d like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Registration Number
                            </label>
                            <input value={userdata.Registration_Number} onChange={formdatainput} name="Registration_Number" className={` appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-city" type="text" placeholder="22ABC1000" />

                        </div>

                        {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input value={userdata.zip} onChange={formdatainput} name="zip" className={` appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-zip" type="text" placeholder="90210" />

                        </div> */}
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

