import Image from 'next/image'
import React from 'react'
import artImg from "/public/img2.jpg"
import Card2 from '@/components/card2'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Rate from '@/components/rate'

function page() {
  return (
    <div >
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className='text-center text-4xl py-6'>science courses</h1>
<div className="flex flex-wrap justify-center items-center container gap-3 ">
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/> 
    </div>
    </div>
    <section className="max-w-full">
   <Rate/>
   <Footer/>

    </section>
   
    </div>
  )
}

export default page