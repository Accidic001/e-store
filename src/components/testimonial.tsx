import React from 'react'
import Image from 'next/image' // Import Image from Next.js for optimization
import Stars from './star';

interface TestimonialProps {
  userImg: string;
  userImgAlt: string;
  userText: string;
}

function Testimonial(props: TestimonialProps) {
  return (
    <>
      <div className="mb-8 sm:break-inside-avoid">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            {/* Use the Image component from Next.js */}
            <Image
              src={props.userImg} // Pass userImg for the src
              alt={props.userImgAlt} // Pass userImgAlt for alt text
              width={50} // Specify the width
              height={50} // Specify the height
              className="rounded-full object-cover"
            />
            <div>
              <div className="flex justify-center gap-0.5 text-green-500">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
              </div>

              <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            {props.userText}
          </p>
        </blockquote>
      </div>
    </>
  );
}

export default Testimonial;
