import Image from 'next/image';
import Link from 'next/link';
function Card(props) {
    return (
        <div className='w-96 rounded-lg mb-10'>
            <Link className='block' href={props.url}>
                <Image priority width='350' height='350' className='object-cover h-full w-full rounded-t-lg ' src={`/${props.Img}`} alt="" />
                <div className=''>
                    <h1 className='text-center font-serif font-bold text-lg'> {props.fullform}</h1>

                </div>
            </Link>
        </div>
    )
}

export default Card;