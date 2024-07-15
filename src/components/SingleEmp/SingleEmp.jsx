import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Style from "./SingleEmp.module.css"

const SingleEmp = () => {
    let [Empdata,setEmpdata]=useState({})
    let {eid}=useParams();
    console.log({eid})

    let getemp=async()=>{
        let {data}=await axios.get(`http://localhost:3200/api/student/getstudents/${eid}`)
        console.log(data)
        setEmpdata(data)

    }
    useEffect(()=>{
        getemp()
    },[])
  return (
    <div className={Style.card1}>
      {
        <div className={Style.div1}>
            <h4 className={Style.s1}>{Empdata.data.fn}</h4>
            <h1 className={Style.s1}>{Empdata.data.ln}</h1>
            <h1 className={Style.s1}>{Empdata.data.age}</h1>
            <h1 className={Style.s1}>{Empdata.gender}</h1>
        </div>
      }
    </div>
  )
}

export default SingleEmp
