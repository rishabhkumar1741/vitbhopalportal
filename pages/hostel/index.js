import { useState } from "react";


export default function carpenter() {
    const [  formdaa, setformdata ] = useState(()=>{
        return {
            fname:"",
            lname:"",
            email:"",
            hostelno:"",
            roomno:"",
            category:"",
            reason:"",
            desc:""
        }
    })
    function fillform(event) {
        console.log([event.target.name]);
        setformdata((prev)=>{
            return {...formdaa,[event.target.name]:event.target.value}
        })
    }

    function funoption()
    {
        if(formdaa.category=="WIFI")
        {
            return <>
            <option>Slow network</option>
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
        else if(formdaa.category=="Lift")
        {
            return <>
            <option>Not working</option>
            <option>Stuck frequently</option>
            <option>Heating issues</option>
            <option>Long wait time and slow speed</option>
            </>
        }
        else if(formdaa.category=="Electricity")
        {
            return <>
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
        else if(formdaa.category=="Plumber")
        {
            return <>
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
        else if(formdaa.category=="Plumber")
        {

        }
        
    } 
    
    
   
    

    return (
        <div className="grid h-screen place-items-center ">
            <div className="shadow-2xl p-10 pt-2  srounded-2xl">
                <div className='bg-blue-500 text-white m-0 rounded-t-sm py-2 mb-4  text-center font-bold '>
                    Raise a Hostel Ticket
                </div>
                <form className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input onChange={fillform} name="fname" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" />

                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input onChange={fillform} name="lname" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-hostelno">
                                Hostel Number
                            </label>
                            <input onChange={fillform} name="hostelno" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-hostelno" type="text" placeholder="111" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-roomno">
                                Room Number
                            </label>
                            <input onChange={fillform} name="roomno" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-roomno" type="text" placeholder="000" />

                        </div>


                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input onChange={fillform} name="email" className={` appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-email" type='email' placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                                Category
                            </label>
                            <div className="relative">
                                <select onChange={fillform} name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                                    <option >Category option</option>
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
                                disabled={ formdaa.category=="" ? true : null}
                                 onChange={fillform}  className={` disabled block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}  id="grid-reason">

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
                        <textarea onChange={fillform} name="desc" className="border border-solid border-gray-300 p-3 w-full rounded" />
                    </div>
                    <div className="flex justify-center items-center bg-blue-500 mt-4">
                        <button className="p-2 text-white font-bold w-full " type='submit'>submit </button>
                    </div>

                </form>

            </div>

        </div>
    )
}