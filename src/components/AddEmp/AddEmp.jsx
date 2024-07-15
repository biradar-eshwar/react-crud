import axios from 'axios'
import React, {useState } from 'react'
import Style from "./AddEmp.module.css"
const AddEmp = () => {
  let [empdata,setempdata]=useState({
    fn:"",
    ln:"",
    age:"",
    gender:"",
    mob:"",
    address:"",
  })


  let handelchange=(e)=>{
    e.preventDefault()
    let {name,value}=e.target;
    setempdata({...empdata,[name]:value});
  }
  let addEmployee=async(e)=>{
    e.preventDefault();
    let sendData= await axios.post("http://localhost:3200/api/student/addstudent",empdata);
    console.log(sendData);

    
  }
  

  
  
  return (
   <section className={Style.sec1}>
    <form onSubmit={addEmployee}>
      <div>
        <h1>SignUp Form</h1>

        </div> 
<div>
  <input className={Style.in1} type="text"
  placeholder='enter your name'
  onChange={handelchange}
  name='fn'
  value={empdata.fn}
  
  />
</div>
<div>
  <input className={Style.in1} type="text"
  placeholder='enter your lastname'
  onChange={handelchange}
  name='ln'
  value={empdata.ln}
  
  />
</div>
<div>
  <input className={Style.in1} type="number"
  placeholder='enter your age'
  onChange={handelchange}
  name='age'
  value={empdata.age}
  
  />
</div>
<div>
  <input className={Style.in2} type="tel"
  placeholder='enter your number'
  onChange={handelchange}
  name='mob'
  value={empdata.mob}
  
  />
</div>
<div className={Style.g1}>
  gender:
 male<input className={Style.in5} type="radio" onChange={handelchange} name='gender' value="male" />
Female<input className={Style.in5} type="radio" onChange={handelchange} name='gender' value="female" />
</div>
<div>
  {/* <p className={Style.p1}>address:</p> */}
  
  <textarea className={Style.ad4} placeholder='enter your address' onChange={handelchange}
  name='address'
  value={empdata.address} cols="30" rows="4"></textarea>
  
  
  
  
</div>

<button className={Style.btns} type='submit'>submit</button>
<button className={Style.btnr} type='reset'>reset</button>
    </form>
   </section>
  )
}

export default AddEmp
