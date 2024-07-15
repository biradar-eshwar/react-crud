import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Navbar1.module.css"
const Navbar1 = () => {
  return (
    <nav>
        <div className={Style.div1}>
            <ul>
                <li className={Style.l1}>
                 <Link to='/add'>AddEmployee</Link>   
                </li>
                <li>
                 <Link to='/emplist'>Employeelist</Link>
      
                </li>
                <li>
                
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar1
