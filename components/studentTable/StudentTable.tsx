import React from 'react'
import {Student} from '@prisma/client'

interface StudentTableProps {
    student: Student;
}
function StudentTable(props: StudentTableProps) {
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-10 py-4 w-1/5">
                    {props.student.firstName}
                </td>
                <td className="px-10 py-4 w-1/5">
                    {props.student.lastName}
                </td>
                <td className="px-10 py-4 w-1/5">
                    {props.student.email}
                </td>
                <td className="px-10 py-4 w-1/5">
                    {props.student.studentId}
                </td>
                <td className="px-10 py-4 w-1/5">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default StudentTable