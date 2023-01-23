import Link from "next/link"
export default function ProblemCard(props) {
    return (
        <div className="w-full m-10  max-w-sm bg-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href={`${props.url}`}>
                
                <img className="p-8 rounded-t-lg" src={`${props.img}`} alt="product image" />
            </Link>
            <div className="px-5 pb-5">

                <h5 className="text-xl text-center justify-center  font-semibold tracking-tight text-gray-900 dark:text-white">
                    {props.problemType}
                </h5>




            </div>
        </div>
    )



}