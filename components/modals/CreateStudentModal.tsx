import { Form, Field, ErrorMessage, Formik } from "formik"
import *as Yup from 'yup'
import {useForm} from 'react-hook-form'
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"

// interface CreateStudentModalProps {
//     showModal: boolean
//     setShowModal: (showModal: boolean) => void
//     role: string
    
//   }

interface Students{
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  students: {
    firstName: string
    lastName: string
    email: string
    studentId: string
  }[]
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  studentId: string
}

  
export const CreateStudentModal = ({
  showModal,
  setShowModal,
  students
} : Students) => {
   
    const [form, setForm] = useState<FormData>({firstName: '', lastName: '', email: '', studentId: ''})
    const router = useRouter()

    const refreshData = () => {
      router.replace(router.asPath)
    }

    async function create(data: FormData) {
      try {
        fetch('http://localhost:3000/api/admin/students', {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(() => {
            setForm({firstName: '', lastName: '', email: '', studentId: ''})
        }
          )
      } catch (error) {
        console.log(error);
      }
    }

    const handleSubmit = async (data: FormData) => {
      try {
       create(data) 
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
        <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 flex-auto">
            <div className="flex flex-col justify-evenly bg-white px-7">
             
              <form
                className="text-secondary-text"
                encType="multipart/form-data"
                onSubmit={e => {
                  e.preventDefault()
                  handleSubmit(form)
                }}
                >
                <div className="mb-4">
                    <h1 className="text-xl text-center mb-1 text-primary-text">
                    Add New Student
                    </h1>
                  
                </div>
                <div className="flex gap-10">
                    
                    <div className="mb-4">
                        <label htmlFor="firstName" className="text-sm">
                        Firstname
                        </label>
                        <input
                        name="firstName"
                        className="text-sm  block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.firstName}
                        onChange={e => setForm({...form, firstName: e.target.value})}
                        />
                        {/* <div className="text-red-400 text-sm py-1">
                        
                        </div> */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="text-sm">
                        Lastname
                        </label>
                        <input
                        name="lastName"
                        className="text-sm  block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.lastName}
                        onChange={e => setForm({...form, lastName: e.target.value})}
                        />
                        {/* <div className="text-red-400 text-sm py-1">
                        
                        </div> */}
                    </div>
                    </div>
                    <div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm">
                        Email
                        </label>
                        <input
                        name="email"
                        className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        />
                        <div className="text-red-400 text-sm py-1">
                        
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="studentId" className="text-sm">
                        Student ID
                        </label>
                        <input
                        name="studentId"
                        className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.studentId}
                        onChange={e => setForm({...form, studentId: e.target.value})}
                        />
                        <div className="text-red-400 text-sm py-1">
                        
                        </div>
                    </div>
                    </div>
                    
                <div className="flex items-center justify-end gap-4 ">
                    <button
                    className="bg-primary rounded text-white text-sm px-4 py-2 border-2 border-primary shadow hover:shadow-lg outline-none focus:outline-none"
                    type="submit"
                    >
                    Submit
                    </button>

                    <button
                    className="background-transparent font-bold px-4 py-2 text-sm border-2 rounded border-secondary-text "
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Cancel
                    </button>
                </div>
                </form> 
            </div>
            
            </div>
            {/* <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                title: '',
                email: '',
                studentId: ''
              }}
              validationSchema={Yup.object({
                studentId: Yup.string().required('Student Id is required.'),
                email: Yup.string()
                  .required('Email is required.')
                  .email('Invalid email address.'),
                firstName: Yup.string().required('Firstname is required.'),
                lastName: Yup.string().required('Lastname is required.'),
                
              })}
              onSubmit={async (values) => {
                
                let formData = new FormData()
                for (let value in values) {
                  if (value === 'role') {
                    // @ts-ignore
                    const allValues = values[value]
                    const val = allValues.map(
                      (v: { label: string; value: string }) => v.value
                    )
                    // @ts-ignore
                    formData.append(value, val.join(' '))
                  } else {
                    // @ts-ignore
                    formData.append(value, values[value])
                  }
                }
                // await saveStudent(formData)
              }}
            >
              {(formik) => {
                return (
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col justify-evenly bg-white px-7">
                      <form
                        className="text-secondary-text"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="mb-4">
                          <h1 className="text-xl text-center mb-1 text-primary-text">
                            Add New Student
                          </h1>
                          
                        </div>
                        <div className="flex gap-10">
                          
                            <div className="mb-4">
                              <label htmlFor="firstName" className="text-sm">
                                Firstname
                              </label>
                              <input
                                name="firstName"
                                className="text-sm  block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                              />
                              <div className="text-red-400 text-sm py-1">
                                <ErrorMessage name="firstName" />
                              </div>
                            </div>
                            <div className="mb-4">
                              <label htmlFor="lastName" className="text-sm">
                                Lastname
                              </label>
                              <input
                                name="lastName"
                                className="text-sm  block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                              />
                              <div className="text-red-400 text-sm py-1">
                                <ErrorMessage name="lastName" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label htmlFor="email" className="text-sm">
                                Email
                              </label>
                              <input
                                name="email"
                                className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                              />
                              <div className="text-red-400 text-sm py-1">
                                <ErrorMessage name="email" />
                              </div>
                            </div>
                            <div className="mb-4">
                              <label htmlFor="studentId" className="text-sm">
                                Student ID
                              </label>
                              <input
                                name="studentId"
                                className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                              />
                              <div className="text-red-400 text-sm py-1">
                                <ErrorMessage name="studentId" />
                              </div>
                            </div>
                          </div>
                          
                        <div className="flex items-center justify-end gap-4 ">
                          <button
                            className="bg-primary rounded text-white text-sm px-4 py-2 border-2 border-primary shadow hover:shadow-lg outline-none focus:outline-none"
                            type="submit"
                          >
                            Submit
                          </button>

                          <button
                            className="background-transparent font-bold px-4 py-2 text-sm border-2 rounded border-secondary-text "
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                )
              }}
            </Formik> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    )
}