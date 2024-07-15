// import React from 'react'
// import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'

// import AddEmp from '../AddEmp/AddEmp'
// import Emplist from "./../Emplist/Emplist"
// import Navbar from '../Navbar/Navbar'

// const Routers = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar/>
//         <Routes>
// <Route path='/add' element={<AddEmp/>}/>
// <Route path='/emplist' element={<Emplist/>}/>


//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default Routers
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmp from '../AddEmp/AddEmp';
import Emplist from '../Emplist/Emplist';
import Navbar1 from '../Navbar/Navbar1';
import UpdateEmp from '../UpdateEmp/UpdateEmp'
import SingleEmp from '../SingleEmp/SingleEmp';

const Routers = () => {
  return (
    <Router>
      <div>
        <Navbar1/>
        <Routes>
          <Route path='/add' element={<AddEmp />} />
          <Route path='/emplist' element={<Emplist />} />
          <Route path='/Update' element={<UpdateEmp/>}/>
          <Route path='/emp/:eid' element={<SingleEmp/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default Routers;
