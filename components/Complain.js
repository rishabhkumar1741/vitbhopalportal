import React from 'react';

const Complain = (props) => {
    console.log(props);
    return (
        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                <div className="flex items-center flex-1 min-w-0">
                                    <img
                                        src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill" className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" />
                                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                        <p className="text-lg font-bold text-gray-800 truncate">{props.category}</p>
                                        <p className="text-gray-600 text-md">{props.reason}</p>
                                        {props.desc?<p className="text-gray-600 text-md">{props.desc}</p>:""}
                                    </div>
                                </div>
                                <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                    <a href="" className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                        duration-200 hover:bg-gray-700 rounded-lg">Edit</a>
                                </div>
                            </div>
                        </div>
    );
}

export default Complain;
