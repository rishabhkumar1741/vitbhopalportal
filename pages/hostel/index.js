import Navbar from '../../components/Navbar'
import ProblemCard from '../../components/ProblemCard'
import { useState } from 'react';
export default function Hostel(props){
    const [problemsarr,setproblemsarr] = useState(props.data.data);

    
    
    const allproblems = problemsarr.map((obj)=>{
        console.log(obj.url);
        return <ProblemCard problemType={obj.problemType} key={obj.sno} url={obj.url} img={obj.img} />
    })
    

    return <div>
        <Navbar></Navbar>
        <div className='mt-10 flex  flex-row flex-wrap justify-center justify-items-center'>
            {allproblems}
        </div>
        
    </div>
}



export async function getServerSideProps(context)
{
    const responce = await fetch('http://localhost:3000/api/hostel');
    const data = await responce.json();
    return {
        props:{data:data}
    }
}