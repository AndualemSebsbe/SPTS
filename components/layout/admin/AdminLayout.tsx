import React from 'react'
// import Navbar from '../../navigation/admin/AdminNavbar'
import Sidebar from '../../navigation/sidebar/sidebar'
import Head from 'next/head'
import { useState } from 'react'
import AdminNavbar from '../../navigation/admin/AdminNavbar'

export interface BaseLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
  classname?: string
}

const AdminLayout = ({
  children,
}: BaseLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <>
      <Head>
        <title>SPMS</title>
      </Head>  
      
      <main className='flex h-full flex-col'>
        <div className='flex flex-1'>
            <div className='flex'>
                <Sidebar isOpen={openSidebar} />
            </div>
            <div className="flex flex-1 flex-col">
            <AdminNavbar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            <div className="paragraph flex flex-1 grow flex-col overflow-y-auto p-6 pt-24">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminLayout