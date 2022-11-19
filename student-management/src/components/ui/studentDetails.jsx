import React, { useState, useEffect } from "react";
import studentService from "../service/studentService";
import { Link } from 'react-router-dom'
import { RiDeleteBin2Line,RiEdit2Line} from "react-icons/ri";

const studentServices = () => {
  const [students, setStudent] = useState([]);

// Get All student
  useEffect(() => {
    studentService
      .allStudents()
      .then((Response) => {
        setStudent(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//Delete student by id
const deleteStudent = (studentId) => {
    studentService.deleteStudent(studentId).then((response) =>{
      console.log(response.data);
      window.location.reload(false);
        
    }).catch(error =>{
        console.log(error);
    })
     
 }
  


  return (
    <div className="main-container box-border">
      <div className="header-bar">
        <nav className="p-3 border-gray-200  bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
               Student Manageement System
              </span>
            </a>
          </div>
        </nav>
      </div>

      {/* Admin dashbord */}
      <div className="main-panel flex">
        {/* Admin sidebar menu */}
      <div className="sidebar flex bg-gray-600 w-60 h-screen ">
        <ul className="flex flex-col space-y-2 m-5 ">
         <li>
            <a href="#" class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
        </ul>
     </div>
      <div className="container">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-3">
          <table className="md:table-auto w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-700 dark:text-white font-mono">
              <tr>
                <th scope="col" className="py-3 px-3">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Date of birth
                </th>
                <th scope="col" className="py-3 px-4">
                  Telephone
                </th>
                <th scope="col" className="py-3 px-4">
                    {/* delete */}
                </th>
                <th scope="col" className="py-3 px-4">
                    {/* update */}
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.studentId}
                  className="bg-blue-500  hover:bg-blue-600  hover:border-blue-800 font-semibold font-sans text-lg"
                >
                  <td className="py-4 px-6">{student.studentId}</td>
                  <td className="py-4 px-6">{student.studentName}</td>
                  <td className="py-4 px-6">{student.address}</td>
                  <td className="py-4 px-6">{student.dob}</td>
                  <td className="py-4 px-6">{student.teleNumber}</td>
                  <td><RiEdit2Line/></td>
                  <td> <button className = "btn" onClick = {() => deleteStudent(student.studentId)}><RiDeleteBin2Line/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default studentServices;
