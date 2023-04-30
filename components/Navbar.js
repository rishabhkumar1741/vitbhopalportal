import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from '../components/Menu'
import {useSession,signIn,signOut} from "next-auth/react";

function Navbar(props) {
    const [toggle, settoggle] = useState(false);
    const { data: session } = useSession({
        required: true
      })
    async function onofftoggle()
    {
        
        
        settoggle((prev)=>{
            return !prev
        });
    }
   

    return (
        <nav className={`flex justify-between items-center h-16 bg-blue-400 px-2 `}>
            <div className='flex items-center'>
                <Link href='/'><Image priority className='text-white w-10' width='20' height='20' src='/vit_logo.png' alt="img" ></Image></Link>
                <h1 className='font-sans font-bold text-white text-lg ml-4'>VIT BHOPAL TICKETING SYSYTEM</h1>
              
            </div>
            <div className="mr-2  ">
                <div className='relative z-10'>
                    <div onClick={onofftoggle}>
                        <span className='cursor-pointer text-white block '>
                            <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28"><path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className={`${toggle ? 'block' : 'hidden'} w-400  absolute top-8 rounded-md  p-5 right-0 font-bold `}>
                        {/* <ul>
                            <li className='hover:text-blue-400 m-2'><Link href='/userticket'>My Tickets</Link></li>
                            <li className='hover:text-blue-400 m-2'><Link href='/'>Explore</Link></li>
                            <li className='hover:text-blue-400 m-2'><Link href='/'>Messages</Link></li>
                            <li className='hover:text-blue-400 m-2'><Link href='/'>Bookmarks</Link></li>
                            <li className='hover:text-blue-400 m-2'><Link href='/'>Profile</Link></li>
                            <button onClick={()=>signOut()} >signOut</button>
                        </ul>
                         */}
                          <Menu user={props.user} />
                       
                       
                        
                        

                    </div>
                    
                    
                </div>
             
            </div>

        </nav>)
}

export default Navbar;

