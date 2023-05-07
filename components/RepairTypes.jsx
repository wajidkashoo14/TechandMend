
import React from 'react'
import data from './repairTypesData'
import Image from 'next/image'

function RepairTypes() {
  return (
    <section className='flex items-center justify-evenly min-h-[80vh]'>
       {data.map(repairType =>  {
        const {id, title, image, discription} = repairType
       return (
        <article key={id} className='p-6 w-96 h-76 shadow-xl border border-gray-200'>
            <h2 className='text-center text-md font-bold mb-3 text-[#47f]'>{title}</h2>
           <Image src={image} alt={`${title} image`} width={350} height={100} className='repair-image' />
           <p className='text-[13px] mt-3 text-center text-[#837469]'>{discription}</p>

        </article>
       )
       })}
    </section>
  )
}

export default RepairTypes