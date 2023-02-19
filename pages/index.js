

import Navbar from '../components/Navbar'
import Card from '../components/Card'

import Head from "next/head"
import Link from 'next/link'
import { useState } from 'react'

import { useRouter } from 'next/router'






export default function Home(props) {
  
  const Router = useRouter();
  const [user, setuser] = useState({value:"null"});

  
  let [departments,setdepartments] = useState(props.data.data);
  let cards = departments.map(function (item) {
    return <Card url={item.url} Img={item.Img} course_name={item.course_name} key={item.key} fullform={item.fullform} />
  })
  return (
    <div>
      <Head>
        <title>VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="my-16 mx-20  flex justify-between flex-wrap  ">
        {cards}
      </div>
    </div>
  )
}


export async function getServerSideProps(context)
{


  let dataPromise  = await fetch(`http://localhost:3000/api/department`);
  let data = await dataPromise.json()
  

  
  return {
    props:{data:data}
  }
}