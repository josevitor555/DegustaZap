// import React from 'react'

import userAvatar from '../images/MirandaAI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons'

// Import branc
import brand from "../images/brand.png"

const RightCol = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[#fffff] gap-12'>
      {/* <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-4xl font-light text-[#1d1d1d]"> DegustaZAP está no ar! </h1>
        <p className="text-2xl text-gray-500 mt-2"> Acesse agora o nosso site e aproveite as melhores ofertas de comida e bebidas </p>
      </div> */}

      <div className="container-post__social-media">

        {/* Container Post Social Media like Instagram */}
        <div className="container-post w-full max-w-md p-4 bg-white rounded-lg">

          {/* Header Post */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center justify-center">
                <img src={userAvatar} alt="User" className="w-16 h-16 rounded-full" />
              </div>

              <div className="user-info__name">
                <h3 className="text-lg font-semibold"> Miranda </h3>
                <p className="text-sm text-gray-500"> @Miranda - <span className="font-bold"> 10.000 vizualizações	 </span></p>
              </div>

            </div>
            
            {/* Dots Menu */}
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Image Post */}
          <div className="mt-4 image-post">
            <img src={brand} alt="Post" className="w-full h-auto rounded-lg" />
          </div>

          {/* Footer Post */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center justify-center gap-6">
              <FontAwesomeIcon icon={faHeart} className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700" />
              <FontAwesomeIcon icon={faComment} className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700" />
              <FontAwesomeIcon icon={faShare} className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>

            {/* Save Post */}
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBookmark} className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>
          </div>

          {/* Description Post */}
          <div className="mt-4 description-post">
            <p className="text-sm text-gray-500">
              <span className="font-bold"> @DegustaZap </span>, como sempre oferecendo as melhores ofertas de comida e bebidas para você! #DegustaZap #Ofertas #Comida #Bebida #Restaurante
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[#1d1d1d]"> Página de perfil </h1>
        <p className="text-lg text-gray-500 mt-2"> Participe de nossas ofertas e receba notificações sobre as melhores ofertas </p>
      </div> */}

    </div>
  );
}

export default RightCol;
