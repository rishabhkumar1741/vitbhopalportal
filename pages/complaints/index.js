import { useState } from "react";
import { useEffect } from "react";
import Complain from "../../components/Complain";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
const Index = () => {


    const { data: session } = useSession({
        required: true
    })

    let [user, setuser] = useState(() => {
        return null;
    })
    let [hostelcomplain, sethostelcomplain] = useState([]);

    useEffect(() => {
        setuser(() => {
            let data = session ? session.user : null;
            if (data) {
                fetch('http://localhost:3000/api/complain?' + new URLSearchParams({
                    Email: 'pandit@gmail.com',
                })).then((apidata) => apidata.json()).then((apidata) => {
                    console.log(apidata.data);
                    sethostelcomplain(apidata.data);

                })
            }
          return data;

        });
    }, [session])



    return (<div>
        <Navbar user= {user}></Navbar>
        <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
            <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xl font-bold text-gray-900">Open Complaints</p>
                            <p className="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">all complaints submitted by students,</p>
                        </div>
                        <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                            <p className="sr-only">Search Position</p>
                            <div className="relative">
                                <div className="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                                    <p>
                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21
                        21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                    </p>
                                </div>
                                <input placeholder="Search Positions " type="search" className="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                    border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"/>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                        <div className="pt--10 pr-0 pb-10 pl-0">


                            {hostelcomplain.map((data) => <Complain key={data._id} name={data.firstName} last={data.lastName} category={data.category} reason={data.reason} roomno={data.roomNo} email={data.email} desc={data.desc} />)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}





export default Index;
