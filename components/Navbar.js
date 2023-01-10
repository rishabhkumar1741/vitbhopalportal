import Image from 'next/image';
import style from '../styles/Navbar.module.css';
import { useSession, signIn, signOut } from 'next-auth/react'

function Navbar() {
    return (
        <nav className={style.nav}>
            <img src='/vit-logo-1.png' alt="img" />
            <h1>VIT BHOPAL</h1>
            <div className={style.nav_buttons}><button onClick={() => signOut()}  className='bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded-full'>signOut</button></div>

        </nav>)
}

export default Navbar;

