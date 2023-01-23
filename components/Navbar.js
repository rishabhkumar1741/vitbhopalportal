import Image from 'next/image';


import { useRouter } from 'next/router';

function Navbar() {
    const Router = useRouter();

    function signout() {
        localStorage.removeItem('token');
        Router.push('/login')

    }
    return (
        <nav className={`flex justify-between h-16 bg-blue-400 px-2 `}>
            <div className='flex items-center'>
                <Image className='text-white w-10' width='20' height='20' src='/vit_logo.png' alt="img" ></Image>
                <h1 className='font-serif font-bold text-white text-lg ml-4'>VIT BHOPAL TICKETING SYSYTEM</h1>
            </div>
            <div className="flex items-center"><button onClick={signout} className='bg-red-500 hover:bg-red-700 text-white font-bold  px-5 py-2  rounded-full'>signOut</button></div>

        </nav>)
}

export default Navbar;

