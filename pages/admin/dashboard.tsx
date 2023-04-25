import React from 'react'
import { ReactElement } from 'react'
import AdminLayout from '../../components/layout/admin/AdminLayout'
// import Students from '../../components/cards/students/Students'
import FullScreenLoader from '../../components/loader/FullScreenLoader'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import { useRouter } from 'next/router'

function Dashboard() {
  const router = useRouter()
  const {isLoading: authLoading} = useAuth()
  useEffect(() => {
    // if(!authLoading){
    //   router.push(/auth/login)
    // }
  }, [authLoading])

  if(authLoading) {
    return <FullScreenLoader />
  }

  

  return (
    <div className='flex'>
        <AdminLayout />
        <h1 className='mt-10 text-gray-500'>Welcome to Coordinator Dashboard</h1>
        
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement){
    return <AdminLayout>{page}</AdminLayout>
}
export default Dashboard