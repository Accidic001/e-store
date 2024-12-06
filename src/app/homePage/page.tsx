import React from 'react'
import homeImg from "/public/home.jpg"
import scienceImg from "/public/img1.jpg"
import artImg from "/public/img2.jpg"
import programmingImg from "/public/img3.jpg"
import Image from 'next/image'
import Testimonial from "@/components/testimonial"
import Card from "@/components/card"
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Rate from '@/components/rate'

const uText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidun consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accuserror officiis atque voluptates magnam!";
const uImage = 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'; // External image URL

function homePage() {
  return (
    <div className='container-fluid'>
      <div className="hero relative h-screen">
        <div className="hero-img-container absolute -z-10 inset-0">
          <Image src={homeImg} alt="home image " className='bg-cover bg-center ' fill={true} style={{ objectFit: "cover" }} />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-slate-600'/>
        <div className="container flex justify-center items-center flex-col absolute  text-center ">
          <h1 className='text-white text-xl md:text-6xl font-bold'>welcome back to e-store</h1>
          <p className='text-white text-xl md:3xl'> The journey of thousand miles starts with a single step.</p>
        </div>
      </div>

      <div className="container flex flex-col justify-center content-center items-center mt-20 ">
        <h1 className='text-4xl  underline-offset-auto'>course categories</h1>
        <div className=" flex gap-5 justify-center items-center flex-wrap mt-10 mb-5 ml-8">
          <Card imgData={scienceImg}  imgAlt="science-img" title='Science' 
            text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
          <Card imgData={artImg} imgAlt="art-img" title='Art' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
          <Card imgData={programmingImg} imgAlt="programming-img" title='Programming' text='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {/* Pass userImg (or external image URL) and userImgAlt */}
            <Testimonial userImg={uImage} userImgAlt='user-image' userText={uText} />
            <Testimonial userImg={uImage} userImgAlt='user-image' userText={uText} />
            <Testimonial userImg={uImage} userImgAlt='user-image' userText={uText} />
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>
        <Rate />
      <Contact />
      <Footer />
    </div>
  );
}

export default homePage;
