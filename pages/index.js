// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import {getSession} from 'next-auth/react';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import deCss from '../styles/Department.module.css'
import Head from "next/head"
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'




export default function Home() {
 



  

  const data = [
    {
      "key": 1,
      "course_name": "B.Tech. Programme",
      "Img": "B.Tech.jpg",
      "fullform":"Bachelor of Technology"
    },
    {
      "key": 2,
      "course_name": "B.Arch",
      "Img": "B.Arch.jpg",
      "fullform":"Bachelor of Architecture"
    },
    {
      "key": 3,
      "course_name": "BBA",
      "Img": "BBA.jpg",
      "fullform":"Bachelor of Business Administration"
    },
    {
      "key": 4,
      "course_name": "MBA",
      "Img": "MBA.jpg",
      "fullform":"Master of Business Administration"
    },
    {
      "key": 5,
      "course_name": "Integrated M.Sc. Biotechnology Programme ",
      "Img": "M.Sc.jpg",
      "fullform":"Master of Science"
    },
    {
      "key": 6,
      "course_name": "M.Tech. Programme",
      "Img": "M.Tech.jpg",
      "fullform":"Master of Technology"
    },
    {
      "key": 7,
      "course_name": "Integrated M.Tech. Programme",
      "Img": "Integrated_M.Tech.jpg",
      "fullform":"Master of Technology"
    },
    {
      "key": 8,
      "course_name": "MCA",
      "Img": "MCA-1.jpg",
      "fullform":"Masters in Computer Application"
    },
    {
      "key": 9,
      "course_name": "ph.D Programme",
      "Img": "ph.d.jpg",
      "fullform":"Doctor of Philosophy"
    },
  ]
  let cards = data.map(function (item) {
    return <Card Img={item.Img} course_name={item.course_name} key={item.key} fullform={item.fullform} />
  })
  return (
    <div>
      <Head>
        <title>VIT Bhopal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className={deCss.Mycontainer}>
        {cards}
      </div>
    </div>
  )
}


export async function getServerSideProps({req})
{
  const session = await getSession({req})
  if(!session)
  {
    return {
      redirect:{
        destination:"/login",
        premanent:false
      }
    }
  }
  return {
    props:{session}
  }
}