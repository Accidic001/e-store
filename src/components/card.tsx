import React from 'react'
import Image, { StaticImageData } from 'next/image'



interface CardProps{
  imgData:StaticImageData;
  imgAlt:string;
  title:string;
  text:string;
}

function Card( props: CardProps) {
  return (
    < >
 <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src={props.imgData} alt={props.imgAlt} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.text}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </>
  )
}

export default Card