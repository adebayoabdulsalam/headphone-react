import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaMapLocation, FaPhone, FaTelegram } from 'react-icons/fa6'
import cards from "../../assets/credit-cards.webp"
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className='bg-primary pt-12 pb-8
    text-white'>
      <div className='container'>
        <div className="grid grid-cols-1
            sm:grid-cols-2 md:grid-cols-3 gap-8">
        </div>
        <div>
          <h1
            className='text-3xl font-bold
              uppercase'
          >Playing</h1>
          <p className='text-sm max-w-[300px]'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum sed
            recusandae delectus?
            iure aliquam impedit assumend
            ipsum ipsam aliquid.
          </p>
          <div className='space-y-6'>
            <p
              className='flex items-center gap-2'
            >
              <FaPhone />
              +1 (123) 456-7890</p>
            <p className='flex items-center gap-2 
                   mt-2'>
              {" "}
              <FaMapLocation /> Noida Uttar Pradesh
            </p>
          </div>
          <div className='space-y-6 '>
            <h1
              className='text-3xl font-b'
            >Quick Links</h1>
            <div className='grid grid-cols-1
            sm:grid-cols-2 gap-3'>
              <div>
                <ul className='space-y-2'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className='space-y-2'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='space-y-6'> 
              <h1
              className='text-3xl font-bold'
              >Follow Us</h1>
              <div className='flex items-center gap-3'>
                <FaFacebook className='text-3xl
                hover:scale-105 duration-300'/>
                <FaInstagram className='text-3xl
                hover:scale-105 duration-300'/>
                <FaTelegram className='text-3xl
                hover:scale-105 duration-300'/>
                <FaGoogle className='text-3xl
                hover:scale-105 duration-300'/>
              </div>
              <div>
                <p>Payment Methods</p>
                <img src={cards} alt=""className='
                w-[80%]' />
              </div>
          </div>
          <p className='text-white text-center mt-8
          border-t-2 pt-8'>2024. All Rights Reserved the Coding
          journey
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer