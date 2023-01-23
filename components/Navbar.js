import Image from 'next/image';
import style from '../styles/Navbar.module.css';

import {useRouter} from 'next/router';

function Navbar() {
    const Router = useRouter();
    
    function signout()
    {
        localStorage.removeItem('token');
        Router.push('/login')

    }
    return (
        <nav className={`${style.nav} bg-blue-600`}>
            <img src='/vit-logo-1.png' alt="img" />
            <h1>VIT BHOPAL</h1>
            <div className={style.nav_buttons}><button onClick={signout}  className='bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded-full'>signOut</button></div>

        </nav>)
}

export default Navbar;

