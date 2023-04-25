import { Formgroup } from "../../../components/Students/Formgroup"
import  { NextApiRequest, NextApiResponse } from "next"

// type Data = {

// }
export default function handler(
    req,
    res
  ) {
    res.status(200).json(Formgroup)
}
