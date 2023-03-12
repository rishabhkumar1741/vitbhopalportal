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
        if(formdaa.category=="Food Quality")
        {
            return <>
            <option>Not Cooked Properly</option>
            <option>Lacking nutrients</option>
            <option>Low quality butter and bread</option>
            <option>Raw potatoes</option>
            <option>Chapati not cooked Properly</option>
            <option>Improper quality of milk and other items</option>
            <option>Not providing sufficient food items</option>
            <option>Other</option>
            </>
        }
        else if(formdaa.category=="Hygiene")
        {
            return <>
            <option>Improper hand washing</option>
            <option>Improper sanitaion</option>
            <option>Unsafe food holding</option>
            </>
        }
        else if(formdaa.category=="Services"){
            return <>
            <option>Not working in a mannered way</option>
            <option>Rude behaviour</option>
            <option>Not providing food items properly</option>
            <option>other</option>
       
            </>
        }
        
        
        
        
    } 
    
    
   
    

    return (
        <div className="grid h-screen place-items-center ">
            <div className="shadow-2xl p-10 pt-2  srounded-2xl">
                <div className='bg-blue-500 text-white m-0 rounded-t-sm py-2 mb-4  text-center font-bold '>
                    Raise a Mess Ticket
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
                                    <option>Food Quality</option>
                                    <option>Hygiene</option>
                                    <option>Service</option>
                                   
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