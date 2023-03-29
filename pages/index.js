

import Navbar from '../components/Navbar'
import Card from '../components/Card'

import Head from "next/head"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import { data } from 'autoprefixer'








export default function Home(props) {

  const Router = useRouter();
  const { data: session } = useSession({
    required: true
  })
 
  let [departments, setdepartments] = useState(props.data.data);

  let cards = departments.map(function (item) {
    return <Card url={item.url} Img={item.Img} course_name={item.course_name} key={item.key} fullform={item.fullform} />
  })
  useEffect(() => {
    
    fetch("/api/userdata", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ "Email": "1741@gmail.com" })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    });

  }, [])
  
 


  if (!session) {
    return <></>

  }
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


export async function getServerSideProps(context) {


  let dataPromise = await fetch(`http://localhost:3000/api/department`);
  let data = await dataPromise.json()



  return {
    props: { data: data }
  }
}