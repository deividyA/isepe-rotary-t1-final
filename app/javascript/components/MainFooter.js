import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import React from "react"


const MainFooter = () => {
  return (
    <React.Fragment>
       
      <div className="flex text-xs sm:text-base md:text-lg lg:text-xl">
      <div className="bg-blue-rotary py-2 pl-2 fixed bottom-0 w-full">
        <div className="flex items-center justify-between text-white">
          <p>
          © 2023 Rotary International.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/rotary">
              <BsFacebook className='hover:text-facebook-blue' />
            </a>
            <a
              href="https://www.instagram.com/rotaryinternational/"
              className="hover:bg-gradient-to-br from-yellow-600 via-rose-700 to-purple-700 rounded-full"
            >
              <BsInstagram />
            </a>
            <a href="https://www.youtube.com/user/RotaryInternational">
              <BsYoutube className='hover:text-youtube-red' />
            </a>
            <a href="https://www.linkedin.com/company/rotary-international/">
              <BsLinkedin className='hover:text-linkedin-blue' />
            </a>
          </div>
          <p className="flex pr-4">Versão Alpha 0.0.1</p>
        </div>
      </div>
    </div>
      
    </React.Fragment>
  )
}



export default MainFooter
