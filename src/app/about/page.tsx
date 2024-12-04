import React from 'react'
import Image from 'next/image'
import artImg from "/public/img2.jpg"
import Contact from '@/components/contact'
import Footer from '@/components/footer'

function page() {
  return (
    <div>
        <div className="hero relative h-screen">
        <div className="hero-img-container absolute -z-10 inset-0">
          <Image src={artImg} alt="home image " className='bg-cover bg-center ' fill={true} style={{ objectFit: "cover" }} />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900'/>
        <div className="container absolute mt-52 text-center ">
          <h1 className='text-white text-3xl font-bold'>Everyone deserves the life-changing impact of education</h1>
          <p className='text-white text-xl'>Education is the bridge to a better future  and we'll help you every step of the way
          </p>
        </div>
      </div>
      <div className=" mx-auto bg-blue-500 pt-5 pb-4 flex items-center justify-center flex-col flex-wrap">
        <h1 className='text-bold text-2xl sm:text-sm md:text-3xl text-center p-3'>Our personalized learning platform helps over 30 million people every month</h1>
        <div className="flex flex-wrap item-center gap-9 py-7 px-5 justify-center content-center">
            <div className='bg-white p-6 rounded-md shadow-md'>
                <h2 className='text-bold text-3xl pt-3 px-4 text-center'>Technology</h2>
                <ol className='py-5 px-5'>
                <li className='p-2'>AI-powered diagnostics</li>
                <li className='p-2'>Adaptive learning technology</li>
                <li className='p-2'>Custom lesson plans</li>
                <li className='p-2'>Mobile app</li>
                <li className='p-2'>Self-paced goal setting and tracking</li>
                </ol>
            </div>
            <div className='bg-white bg-white p-6 rounded-md shadow-md'>
                <h2 className='text-bold text-3xl pt-3 px-4 text-center'>People</h2>
                <ul className='p-5'>
                <li className='p-2'>Lessons created by top teachers</li>
                <li className='p-2'>Ask questions & get expert help</li>
                <li className='p-2'>Coaching for motivation & support</li>
                </ul>
            </div>
            <div className='bg-white bg-white p-6 rounded-md shadow-md'>
                <h2 className='text-bold text-3xl pt-3 px-4 text-center'>Curriculum</h2>
                <ul className='p-5'>
                <li className='p-2'>Over 2 million learning resources</li>
                <li className='p-2'>Fast, efficient microlearning</li>
                <li className='p-2'>Dynamic videos</li>
                <li className='p-2'>Flexible content</li>
                <li className='p-2'>Custom practice</li>
                </ul>
            </div>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page