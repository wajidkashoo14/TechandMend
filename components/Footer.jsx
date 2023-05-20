import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <section className='h-200px w-full flex justify-evenly items-center py-20 bg-[#EEF1F3]'>
        <div className='w-64'>
            <h2 className='font-semibold mb-3'>TECHANDMEND</h2>
            <p className='text-sm text-left'>Tech and Mend is your one-stop repair shop for all your tech needs. From smartphones and iPhones to tablets, desktops, and laptops, we specialize in expert repairs. Our skilled technicians ensure quick and reliable service, restoring your devices to their optimal functionality.</p>
        </div>
        <div className='w-44 mb-2'>
            <h2 className='font-semibold'>OUR SERVICES</h2>
            <span className='w-42'>Smart Phone Repair</span>
            <span>Tablets and iPad Repair</span>
            <span>Desktop and Laptop Repair</span>
            <span>Data Recovery</span>
            <span>Data Transfer</span>
        </div>
        <div className='w-52 mb-5'>
            <h2 className='mb-4 font-semibold'>
                SUBSCRIBE US
            </h2>
            <h5 className='text-sm my-2'>Subscribe to our newsletter!</h5>
            <input type='email' placeholder='Enter your email' className='p-1' />
            <p className='text-[10px] mt-2 focus:outline-none'>We don't do mail to spam and your mail id is confidential</p>
            <div className='flex gap-5 items-center cursor-pointer mt-6'>
                <FaFacebookF />
                <GrInstagram />
                <AiOutlineTwitter />
            </div>
        </div>
        <div className='w-56 mb-4'>
            <h2 className='font-semibold'>CONTACT INFO</h2>
            <div>
                <div className='text-[13px]'>
                    <h3 className='font-semibold'>4 Tickhill Rd, Maltby</h3>
                    <span>Rotherham S66 7BP, UK</span>
                </div>
                <div className='text-[13px]' >
                    <h3 className='font-semibold'>Call Us</h3>
                    <span>07459948178</span>
                </div>
                <div className='text-[13px]'>
                    <h3 className='font-semibold'>Mail Us</h3>
                    <span>Wkashoo@gmail.com</span>
                </div>
                <div className='text-[13px]'>
                    <h3 className='font-semibold'>Opening Time</h3>
                    <span>Mon-Sat : 10am -9pm</span>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Footer