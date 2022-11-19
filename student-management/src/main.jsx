import React from 'react'
import ReactDOM from 'react-dom/client'
import "../src/index.css"
import StudentDetails from '../src/components/ui/studentDetails'
import NavigationBar from './components/ui/navigationBar'
// import StudentData from './components/ui/studentData'

import { BrowserRouter as Router, Routes,Route
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
   <NavigationBar/>
  <Routes>
    <Route path="/" element={ <StudentDetails/>} />
    {/* <Route path="/add-student" element={<StudentData/>} /> */}
  </Routes>
</Router>
  </React.StrictMode>
)
