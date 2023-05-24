import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from '../../components/Navbar'
export default function carpenter() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true
    })
    const [formdata, setformdata] = useState(() => {
        return {
            firstName: "",
            lastName: "",
            email: "",
            hostelNo: "",
            roomNo: "",
            category: "",
            reason: "",
            desc: ""
        }
    })

    let [user, setuser] = useState(() => {
        return null;
    })


    function fillform(event) {
        if (session) {
            setformdata((prev) => {


                return { ...prev, firstName: session.user.name.FirstName, lastName: session.user.name.LastName, email: session.user.name.Email };
            })

        }


        setformdata((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })

    }


    function funoption() {
        if (formdata.category == "WIFI") {
            return <>
                <option >--Please choose an option--</option>
                <option  >Slow network</option>
                <option>Wifi cable gets damaged</option>
                <option>Connectivity issue with WIFI</option>
                <option>Router crashes regularly</option>
                <option>connection drop random times</option>
                <option>The network connects, but theres no internet access</option>
                <option>Forget the wifi password</option>
                <option>Not able to connect two devices with  wifi</option>
                <option>WIFI router is not working</option>
            </>
        }
        else if (formdata.category == "Lift") {
            return <>
                <option >--Please choose an option--</option>
                <option>Not working</option>
                <option>Stuck frequently</option>
                <option>Heating issues</option>
                <option>Long wait time and slow speed</option>
                <option>Other</option>
            </>
        }
        else if (formdata.category == "Electricity") {
            return <>
                <option >--Please choose an option--</option>
                <option>Power cut in rooms</option>
                <option>Switches of lights not working</option>
                <option>Fan is not working</option>
                <option>Poor circuit connection</option>
                <option>Light bulbs burn out too frequently</option>
                <option>Flickering light and too bright or dim lighting</option>
                <option>Damaged power lines</option>
                <option>Tripping circuit breaker</option>
                <option>Plugs falls out receptacle: no longer grip to plugs</option>
                <option>Short circuit</option>
                <option>Warm or sparking outlets and switches</option>
                <option>Buzzing sound</option>
                <option>Broken lights switches and loose outlets </option>
            </>
        }
        else if (formdata.category == "Plumber") {
            return <>
                <option >--Please choose an option--</option>
                <option>Clogged drains and toilets</option>
                <option>Leaky faucets and pipes</option>
                <option>Water heater issues</option>
                <option>Running toilets</option>
                <option>Slow draining sink</option>
                <option>Main water line or break</option>
                <option>Overflowing gutters</option>
                <option>Water stains in rooms</option>
                <option>Blocked toilets</option>
                <option>Cracked seals</option>
                <option>Pipe corrosion</option>
            </>
        }
        else if (formdata.category == "Water Cooler") {
            return <>
                <option >--Please choose an option--</option>
                <option>No Water</option>
                <option>Taps are not Working</option>
                <option>Leakage</option>
                <option>Dust inside the Tank</option>
                <option>Water is not clear</option>
                <option>Water heater is not working</option>
            </>
        }
        else if (formdata.category == "Furniture") {
            return <>
                <option >--Please choose an option--</option>
                <option>Shortage of chair and tables</option>
                <option>Tables with uneven legs</option>
                <option>Woobly chairs</option>
            </>
        }
        else if (formdata.category == "Hygiene") {
            return <>
                <option >--Please choose an option--</option>
                <option>Poor water supply</option>
                <option>Guiser is not working </option>
                <option>Switches are not working</option>
                <option>Unhygenic bathrooms</option>
                <option>Showers are not working</option>
                <option>Clogged bath or shower drains</option>
                <option>Leaking taps</option>
                <option>Leaking showers</option>

            </>
        }


    }

    async function sendcollegedata(event) {
        event.preventDefault();

        const option = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        }
        const res = await fetch('http://localhost:3000/api/hostel', option);
        console.log(res);
        const data = await res.json();
        if (data.hasError == false) {
            setformdata(() => {
                return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    hostelNo: "",
                    roomNo: "",
                    category: "",
                    reason: "",
                    desc: ""
                }
            })
            router.push("/");
        }
    }

    useEffect(() => {
        setuser(() => {
            let data = session ? session.user : null;


            return data;
        });


    }, [session])




    return (
        <>
            <Navbar user={user}></Navbar>

            <div className="grid h-screen place-items-center ">
                <div className="shadow-2xl p-10 pt-2  srounded-2xl">
                    <div className='bg-blue-500 text-white m-0 rounded-t-sm py-2 mb-4  text-center font-bold '>
                        Raise a Hostel Ticket
                    </div>
                    <form className="w-full max-w-lg " onSubmit={sendcollegedata}>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input onChange={fillform} value={user ? user.name.FirstName : ""} name="firstName" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" />

                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input onChange={fillform} value={user ? user.name.LastName : ""} name="lastName" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-hostelNo">
                                    Hostel Number
                                </label>
                                <input onChange={fillform} name="hostelNo" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-hostelNo" type="text" placeholder="111" />
                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-roomNo">
                                    Room Number
                                </label>
                                <input onChange={fillform} name="roomNo" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-roomNo" type="text" placeholder="000" />

                            </div>


                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                    email
                                </label>
                                <input value={user ? user.name.Email : ""} onChange={fillform} name="email" className={` appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-email" type='email' placeholder="email" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                                    category
                                </label>
                                <div className="relative">
                                    <select onChange={fillform} name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                                        <option >category option</option>
                                        <option>WIFI</option>
                                        <option>Electricity</option>
                                        <option>Furniture</option>
                                        <option>Plumber</option>
                                        <option>Water Cooler</option>
                                        <option>Lift</option>
                                        <option>Hygiene</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-reason">
                                    Reason
                                </label>
                                <div className="relative">
                                    <select name="reason"
                                        disabled={formdata.category == "" ? true : null}
                                        onChange={fillform} className={` disabled block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-reason">

                                        {funoption()}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="" >
                            <label className="block text-bold uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "> Description</label>
                            <textarea onChange={fillform} name="desc" className="border border-solid  border-gray-300 p-3 w-full rounded" />
                        </div>
                        <div className="flex justify-center items-center bg-blue-500 mt-4">
                            <button className="p-2 text-white font-bold w-full " type='submit'>submit </button>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}  