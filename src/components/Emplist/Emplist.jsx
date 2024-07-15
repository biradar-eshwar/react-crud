import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Style from "./Emplist.module.css"
const Emp = () => {
let [Emplist,setEmplist]=useState([]);
let navigate=useNavigate();

let getemp=async()=>{
  let {data}=await axios.get("http://localhost:3200/api/student/getstudents")
  console.log(data)
  setEmplist(data)
  console.log(Emplist)
}
useEffect(()=>{
  getemp()
},[])

let viwemp=(eid)=>{
  navigate(`/emp/${eid}`)

}

let navigatetoUpdate=(eid)=>{
  localStorage.setItem("eid",`${eid}`)
  navigate('/Update')


}

let deletecard= async(eid)=>{
  console.log(eid)
  let {data}=await axios.delete(`http://localhost:3200/api/student/deletestudent/${eid}`)
  console.log(data)
getemp()
}
  return (
    <div className={Style.cards}>
      {Emplist.data?.map((m)=>{
        console.log(m)
        return(<>
        <div className={Style.cards1}>
          <h2 className={Style.m1}>{m._id}</h2>
          <h2 className={Style.m2}>{m.fn}</h2>
          <h2 className={Style.m3}>{m.ln}</h2>
          <h2>{m._}</h2>
          <button onClick={()=>viwemp(m._id)} className={Style.btn1}>View</button>

          <button onClick={()=>navigatetoUpdate(m._id)}className={Style.btn2}>Update</button>
          <button onClick={()=>deletecard(m._id)}className={Style.btn3}>Delete</button>

        </div>
        
        </>)

      })}
    </div>
  )
}

export default Emp
