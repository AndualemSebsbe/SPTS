import React from 'react'
import AdminLayout from '../components/layout/admin/AdminLayout'
import NavBar from '../components/navigation/header/NavBar'
import Image from 'next/image'
import { Footer } from '../components/navigation/footer/Footer'
function Aboutus() {
  return (
    <div className='flex flex-col'>
        <div className='mb-12'>
         <NavBar/>
        </div>
        <div>
          <h1 className='text-center mt-12'>Who We Are ?</h1>
        </div>
        <div className='grid grid-cols-5 justify-items-center'>
          <div className='col-span-2'>
            <Image src='/aboutus.jpg' alt='/' width='500' height='300'/>
          </div>
          <div className='col-span-1'>
            <p className='text-xl'>Information is used as a strategic tool to increase efficiency, stimulate innovation, and allow organizations to gain competitive advantages. All sectors of society and the activities of individuals depend on the efficient handling of information. There is a rapidly growing demand for information by an ever-wide range of user’s educators, researchers, planners, policy makers, managers, technicians and the public at large – for their successful functioning.</p>
          </div>
        </div>
        <div className='justify-items-center text-xl grid grid-cols-5'>
          <p className='col-span-4 items-center m-12'>However, the chronic shortage of skilled information personnel had long been the main stumbling block in the development of modern information systems and services in Africa. It was recognized that one of the main reasons for the chronic shortage of information specialists in Africa was the lack of fully developed educational and training program in Information Science. It was in this regard that the need for establishing a regional school of information science was felt.

          <p className='col-span-4 my-12'>The School of Information Studies for Africa (SISA) was thus established, in 1990, with the assistance of the International Development Research Center of Canada (IDRC) and UNESCO to respond to the urgent and growing need in Eastern and Southern Africa for high-level manpower, who can research, design, implement, operate and manage information systems and services at the local, national and regional levels. Right from its establishment the current school of Information Science was placed under various colleges like Faculty of Informatics and College of Management, Information and Economic Sciences (CMIES) at different stages.  As of June 2012 it has been placed under the College of Natural and Computational Sciences (CNCS) while its physical location is at Eshetu Chole Building, FBE campus
</p>
          <p className='col-span-4 '>The School of Information Science currently has more than 500 students in all programs including undergraduate and postgraduate programs. The school has 35 academic staffs, 6 support staffs and 3 Technical Assistants.</p>
</p>
        </div>
        <Footer />
    </div>
  )
}

export default Aboutus