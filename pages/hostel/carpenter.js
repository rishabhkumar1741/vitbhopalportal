 export default function carpenter()
{
    return (
        <div className="grid h-screen place-items-center ">
            <div className="shadow-2xl p-10 rounded-2xl">
                <form className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input name="fname" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" />

                            <p className="text-blue-500 text-xs italic">Please fill out this field.</p>

                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input name="lname" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0 `} >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Hostel Number
                            </label>
                            <input name="fname" className={`  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="111" />

                            <p className="text-blue-500 text-xs italic">Please fill out this field.</p>

                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Room Number
                            </label>
                            <input name="lname" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="000" />

                        </div>


                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input name="email" className={` appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-email" type='email' placeholder="Email" />

                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you&apos;d like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Reason
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">

                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" >
                        <label className="block text-bold uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "> Description</label>
                        <textarea className="border border-solid border-gray-300 p-3 w-full rounded" />
                    </div>
                    <div className="flex justify-center items-center bg-blue-500 mt-4">
                        <button className="p-2 text-white font-bold w-full " type='submit'>submit </button>
                    </div>

                </form>

            </div>

        </div>
    )
}