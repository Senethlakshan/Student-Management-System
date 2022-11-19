import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/ui/app'
import StudentDetails from '../src/components/ui/studentDetails'
import "../src/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StudentDetails/>
  </React.StrictMode>
)
