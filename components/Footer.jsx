import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <section className='h-200px w-full flex justify-evenly items-center my-20'>
        <div className='w-64'>
            <h2>TECHANDMEND</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ab accusamus placeat omnis voluptates iure voluptate perferendis quasi repudiandae fuga.</p>
        </div>
        <div className='w-56'>
            <h2>OUR SERVICES</h2>
            <span>Smart Phone Repair</span>
            <span>Tablets and iPad Repair</span>
            <span>Desktop and Laptop Repair</span>
            <span>Data Recovery</span>
            <span>Data Transfer</span>
        </div>
        <div className='w-56'>
            <h2>
                SUBSCRIBE US
            </h2>
        </div>
        <div className='w-56'>
            <h2>CONTACT INFO</h2>
        </div>
    </section>
  )
}

export default Footer