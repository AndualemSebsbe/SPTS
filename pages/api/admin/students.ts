import type { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient, Prisma} from '@prisma/client';

const prisma = new PrismaClient();
export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {id,firstName,lastName,email,studentId}=req.body
    try{
        await prisma.student.create({
            data: {
                id,
                firstName,
                lastName,
                email, 
                studentId
            }
            })
            res.status(200).json({message:'student added'})
        }
        catch(error){
            console.log("failure");             
        }
    }


// export default async (params:type) {
    
// }(req: NextApiRequest, res: NextApiResponse) => {

    // if(req.method != 'POST'){
    //     return res.status(405).json({message: 'Method not allowed'});
    // }

    // try {
    //     const studentData: Prisma.StudentCreateInput = JSON.parse(req.body);
    //     const savedStudent = await prisma.student.create({
    //     data: studentData
    // });

    // res.status(200).json({message:'savedStudent'});
    // } catch (err){
    //     res.status(400).json({message: 'Something went wrong'})
    // }
//};