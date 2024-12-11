
import React from 'react'
import Card2 from '@/components/card2'
import Footer from '@/components/footer'
import Rate from '@/components/rate'
import p9Img from "/public/p9.jpg"
import p10Img from "/public/p10.jpg"
import p11Img from "/public/p11.jpg"
import p7Img from "/public/p7.jpg"
import programmingImg from "/public/img3.jpg"

function page() {
  return (
    
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className='text-center text-4xl py-6'>Programming</h1>
<div className="flex flex-wrap justify-center items-center container gap-3 ">
    <Card2 imgData={programmingImg} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p11Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p11Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p11Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p11Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p11Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <h1 className='text-center text-4xl py-6'>Data science</h1>
<div className="flex flex-wrap justify-center items-center container gap-3 ">
    <Card2 imgData={p10Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p10Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p7Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p10Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p10Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p10Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    
    </div>
    <h1 className='text-center text-4xl py-6'>Data Analysis</h1>
<div className="flex flex-wrap justify-center items-center container gap-3 ">
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    <Card2 imgData={p9Img} imgAlt="art-img" title='Noteworthy technology acquisitions 2021' text='Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.' />
    
    </div>
    </div>
    <section className="w-full  flex flex-col">
      <div className=""><Rate/></div>
     <div className=""><Footer/></div>
    </section>
    
    </div>
    
  )
}

export default page