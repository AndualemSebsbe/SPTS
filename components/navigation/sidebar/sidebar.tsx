import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaDatabase, FaUser } from 'react-icons/fa'
import {CgLogOut} from 'react-icons/cg'
import {BiGroup} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const Menus = [
        { title: 'Students', src: <FaUser size={15} />, linkto: '/admin/students' },
        { title: 'Examiners', src: <FaUser size={15} />, linkto: '/admin/examiners' },
        { title: 'Advisors', src: <FaUser size={15} />, linkto: '/admin/advisors' },
        { title: 'Projects', src: <FaDatabase size={15} />, linkto: '/admin/projects' },
        { title: 'Groups', src: <BiGroup size={15} />, linkto: '/admin/groups' },
        { title: 'Logout', src: <CgLogOut size={15} />, linkto: '/admin/logout' },
    ]
    const router = useRouter();
  return (
    <div className="flex bg-white text-secondary-text text-sm shadow-lg justify-start">
      <div
        className={clsx(
          isOpen ? 'w-64' : 'hidden',
          'relative h-screen  p-5 pt-8',
          ' duration-300'
        )}
      >
        <div className="flex gap-x-4">
            <p className='bg-gradient-to-r from-[#264FAD] via-[#264FAD] to-[#029AF8] text-white rounded-lg gap-x-3 text-xl'>SPTS</p>
          {/* <Image
            src="/booking.jpg"
            alt="Africa to silicon valley logo"
            width={100}
            height={100}
            className="cursor-pointer"
          /> */}
        </div>

        <ul>
          <li
            className={clsx(
              ' cursor-pointer my-6',
              'hover:border-l-4 hover:border-white',
              ' hover:bg-light-white'
            )}
          >
            <div
              className={clsx(
                'p-2 rounded ',
                // 'bg-black',
                router.pathname == '/admin/dashboard' &&
                  'bg-gradient-to-r from-[#264FAD]',
                ' via-[#264FAD] to-[#029AF8]'
              )}
            >
              <Link
                href="/admin/dashboard"
                prefetch={false}
                className={clsx(
                  'flex gap-x-3 items-center',
                  router.pathname == '/admin/dashboard' && 'text-white', 'no-underline text-gray-500'
                )}
              >
                <RxDashboard size={15} />
                <span
                  className={`${!isOpen && 'hidden'} origin-left duration-200`}
                >
                  Dashboard
                </span>
              </Link>

            </div>
          </li>
          {/* </ul> */}
          <div className="text-[#B9B9C3] text-xs uppercase pl-2">Content</div>
          {/* <ul> */}
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={clsx(
                ' cursor-pointer my-2',
                'hover:border-l-4 hover:border-white',
                ' hover:bg-light-white'
              )}
            >
              <div
                className={clsx(
                  'p-2 rounded ',
                  router.pathname == Menu.linkto &&
                    'bg-gradient-to-r from-[#264FAD]',
                  ' via-[#264FAD] to-[#029AF8]'
                )}
              >
                <Link
                  href={Menu.linkto ? Menu.linkto : '#'}
                  prefetch={false}
                  className={clsx(
                    'flex gap-x-3 items-center',
                    router.pathname == Menu.linkto && 'text-white no-underline', 'no-underline'
                  )}
                >
                  {Menu.src}
                  <span
                    className={`${
                      !isOpen && 'hidden'
                    } origin-left duration-200 `}
                  >
                    <div className=' text-gray-500'>
                      {Menu.title}
                    </div>
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
//     <div>

//     <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//     <span className="sr-only">Open sidebar</span>
//     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//         <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//     </svg>
//     </button>

//     <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//     <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//         <ul className="space-y-2">
//             <li>
//                 <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
//                 <span className="ml-3">Dashboard</span>
//                 </a>
//             </li>
//             <li>
//                 <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
//                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
//                     <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Students</span>
//                     <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </button>
//                 <ul id="dropdown-example" className=" py-2 space-y-2">
//                     <li >
//                         <button onClick={onAdd} className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add</button>
//                         {/* <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add</a> */}
//                     </li>
//                     <li>
//                         <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Edit</a>
//                     </li>
//                     <li>
//                         <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Delete</a>
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
//                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
//                     <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Staffs</span>
//                     <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </button>
//                 <ul id="dropdown-example" className=" py-2 space-y-2">
//                     <li>
//                         <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add </a>
//                     </li>
//                     <li>
//                         <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Edit</a>
//                     </li>
//                     <li>
//                         <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Delete</a>
//                     </li>
//                 </ul>
//             </li>
            
//             <li>
//                 <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
//                 <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
//                 </a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
//                 <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
//                 </a>
//             </li>
//             <li>
//                 <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
//                 <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
//                 </a>
//             </li>
//         </ul>
//     </div>
//     </aside>
// {/* 
//     <div className="p-4 sm:ml-64">
//     <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//         <div className="grid grid-cols-3 gap-4 mb-4">
//             <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//         </div>
//         <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//             <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//         </div>
//         <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//             <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//             <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                 <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
//             </div>
//         </div>
//     </div>
//     </div> */}

//     </div>
  )
}

export default Sidebar