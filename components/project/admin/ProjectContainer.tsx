import React from 'react'
import { ProjectProps } from '../../../types/types'
import { useSelector } from 'react-redux'
import { projects } from './projects'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Image from 'next/image'
import {useState} from 'react'
function ProjectContainer() {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
  return (
    
    <div className=' ml-10 '>
        <div className="flex justify-end my-12">
        <button
          className="bg-primary text-white text-sm px-4 py-2 rounded shadow hover:shadow-lg "
          type="button"
          onClick={() => setShowModal(true)}
        >
          + Add Project
        </button>
      </div>
        <div className='mt-[-12]'>
        <h1 className="text-xl text-primary-text ">All Projects</h1>
        </div>
        {/* <div className="flex flex-wrap gap-10 py-10"> */}
            <ul
            
                className='grid grid-cols-6 gap-10 py-10'
            >
                
                {projects.map((link, index) => {
                return (
                    <li key={index} className={clsx(link.cname)}>
                    <Link
                        href={link.href}
                        prefetch={false}
                        // onClick={showNav}
                        className={clsx(
                        router.pathname == link.href && 'text-primary', 'text-black no-underline',
                        )}
                    >
                        {/* {link.image} */}
                        <Image
                        src={link.image}
                        alt='image'
                        width='300'
                        height='300'
                        />

                    
                        <div className='font-semibold text-xl '>
                        {link.title}
                        </div>
                        <div className='text-sm text-gray-500'>
                        {link.date}
                        </div>
                        <div>
                        <Link href={link.href}>View Details</Link>
                        </div>
                        {router.pathname == link.href && (
                        <div className="flex justify-center">
                            <div className="border-primary w-4 border-b-4 rounded-[1.5px]"></div>
                        </div>
                        )}
                    </Link>
                    </li>
                )
                })}
          </ul>
        {/* </div> */}
    </div>
    
  )
}

export default ProjectContainer