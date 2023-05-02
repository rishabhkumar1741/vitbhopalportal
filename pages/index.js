

import Navbar from '../components/Navbar'
import Card from '../components/Card'

import Head from "next/head"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import { data } from 'autoprefixer'
import Menu from '../components/Menu'








export default function Home(props) {

  const Router = useRouter();

  const { data: session} = useSession({
    required: true
  })


  let [departments, setdepartments] = useState(props.data.data);
  let [user , setuser] = useState(()=>{
    return null;
  })

  let cards = departments.map(function (item) {
    return <Card url={item.url} Img={item.Img} course_name={item.course_name} key={item.key} fullform={item.fullform} />
  })



  

  

  useEffect(()=>{ setuser(()=>{
    let data = session?session.user:null;
    console.log(data);
    return data;
  }); },[session])




  


  





  return (
    <div>
      
      <Head>
        <title>VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar user= {user}></Navbar>

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