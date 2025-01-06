// "use client";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "@/components/loginpage";
// import StudentTable from "@/components/StudentTable";

// const Loginpage = () => {
//   return (
//     <Router>
//       <Switch/>
//         <Route exact path="/" component={Login} />
//         <Route path="/home" component={StudentTable} />
//     </Router>
//   );
// };

// export default Loginpage;


"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/components/loginpage";
import StudentTable from "@/components/StudentTable";

const Loginpage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<StudentTable />} />
      </Routes>
    </Router>
  );
};

export default Loginpage;
