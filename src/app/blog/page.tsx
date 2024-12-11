import React from 'react'
import artImg from "/public/img2.jpg"
import p1Img from "/public/p1.jpg"
import  p2Img from "/public/p2.jpg"
import p3Img from "/public/p3.jpg"
import  p4Img from "/public/p4.jpg"
import  p5Img from "/public/p5.jpg"
import  p6Img from "/public/p6.jpg"
import  p7Img from "/public/p7.jpg"
import  p8Img from "/public/p8.jpg"

import Card from '@/components/card'
import Contact from '@/components/contact'
import Footer from '@/components/footer'




function Blog() {
  return (

    <div>
        <div className='flex  flex-col items-center justify-center px-0'>
        <div className="text flex flex-col items-center justify-center">
            <h1 className='text-2xl text-blue-700 p-3 text-semibold'>e-store Blog</h1>
            <p className='p-5 m-3 text-sm '>The e-Store.com Blog provides information and advice for students, parents, 
                and teachers to tackle their biggest challenges in education. Our veteran teachers 
                and other experts share creative solutions to help you build confidence, save time, 
                and improve your academic skills.

</p>
        </div>
        <div className="cards flex gap-4 flex-wrap my-5   ml-20 mr-5 md:pl-12  md:ml-8 ">
        <Card imgData={p1Img} imgAlt="art-img" title='Art' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p2Img} imgAlt="art-img" title='Data Analysis' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p3Img} imgAlt="art-img" title='Hack' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p4Img} imgAlt="art-img" title='Code' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p5Img} imgAlt="art-img" title='program' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p6Img} imgAlt="art-img" title='javascript' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p7Img} imgAlt="art-img" title='web developer' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={p8Img} imgAlt="art-img" title='Art of code' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card imgData={artImg} imgAlt="art-img" title='Articles' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Blog