import React from 'react'
import Image from 'next/image'
import rateeat from '../../public/rateeat-item.png'
import Link from 'next/link'
import NavBar from '../../components/navigation/header/NavBar'
import { Footer } from '../../components/navigation/footer/Footer'

function rateeatDetail() {
  return (
    <div>
    <div>
        <NavBar></NavBar>
        <div className='flex '>
          {/* <h1>Welcome to Rate Eat Detail Page</h1> */}
          <div>
            <Image 
            src={rateeat}
            alt='Rate Eat Image'
            width='500'
            height='100'
            // className='z-index-1'
            />
          </div>
          <div>
            <Image 
            src={rateeat}
            alt='Rate Eat Image'
            width='500'
            height='100'

            />
          </div>
          <div>
            <Image 
            src={rateeat}
            alt='Rate Eat Image'
            width='500'
            height='100'

            />
          </div>
      </div>
      <div className='mt-[-150px] mx-10'>
          <div>
            <p className='text-white text-xl font-bold'>Rate Eat</p>
          </div>
          <button type='button' className='bg-[#853544]  text-white rounded-lg p-2'>
            <Link href='https://rateeat.app' className='no-underline text-white'>
            Live Preview
            </Link>
          </button>
      </div>
    </div>
    <div>
    <div className='grid grid-cols-4 mx-10 mt-[100px]'>
      <p className='text-md font-semibold text-gray-500 mt-10 col-span-2'>Description</p>
      <p className='text-sm text-gray-500 col-span-3'>A platform that allows users to give and consume
item specific reviews and show growth points of
businesses </p>
      <p className='text-sm text-gray-500 col-span-2'>Search for exactly what you need, filter by
      distance, price, rating, and availability. Leave your
      reviews and endorse others. Have access to the
      most accurate and up-to-date information.
      </p>
    </div>
    <div>
      <button>
        <Link href='#' className='bg-blue-500 p-2 rounded-lg mx-10 text-white no-underline'>Download</Link>
      </button>
    </div>
    {/* </div> */}
    <Footer></Footer>
    </div>
    </div>
    
  )
}

export default rateeatDetail