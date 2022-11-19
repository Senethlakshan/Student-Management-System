import React, {useState,useEffect} from 'react'
import {Link, useHistory,useParams } from 'react-router-dom';
import StudentService from '../service/studentService';

const studentData = () => {

    const [studentId, setstudentId] = useState('')
    const [studentName, setstudentName] = useState('')
    const [address, setaddress] = useState('')
    const [dob, setdob] = useState('')
    const [teleNumber, setteleNumber] = useState('')
    const history = useHistory();
    const {id} = useParams();
  

    const saveStudent =(e) =>{
    
            e.preventDefault();
    
            const student = {studentId,studentName,address,dob,teleNumber}

            
            if(id){
               
                StudentService.updateStudent(id, student).then((response) => {
                    console.log(response.data)
                    history.push('/')
                }).catch(error => {
                    console.log(error)
                })
    
            }else{
                
                StudentService.addStudent(student).then((response) =>{

                    console.log(response.data)
                    history.push('/')
        
                }).catch(error => {
                    console.log(error)
                })
            }
            
        
            

        
    }
    
    //save student function

    useEffect(() => {

        StudentService.getStudentById(id).then((response) =>{
            setstudentId(response.data.studentId)
            setstudentName(response.data.studentName)
            setaddress(response.data.address)
            setdob(response.data.dob)
            setteleNumber(response.data.teleNumber)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Student data</h2>
        }else{
            return <h2 className = "text-center">Add Student data</h2>
        }
    }
   
    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <div>
                    {
                           title()
                    }
                    </div>
                        <div className = "card-body">
                            <form>
                                <div className = "mb-2">
                                    <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Student id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Student id"
                                        name = "StudentId"
                                        className ="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value = {studentId}
                                        onChange = {(e) => setstudentId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "mb-2">
                                    <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Student id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Student name"
                                        name = "StudentName"
                                        className ="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value = {studentName}
                                        onChange = {(e) => setstudentName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "mb-2">
                                    <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Student id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address "
                                        name = "Address"
                                        className ="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value = {address}
                                        onChange = {(e) => setaddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "mb-2">
                                    <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Student id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Date of birth"
                                        name = "DateOfBirth"
                                        className ="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value = {dob}
                                        onChange = {(e) => setdob(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "mb-2">
                                    <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Student id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Telephone number"
                                        name = "TeleNumber"
                                        className ="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value = {teleNumber}
                                        onChange = {(e) => setteleNumber(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <button className = "btn bg-blue-600 text-white" onClick = {(e) => saveStudent(e)} >Submit </button>
                                <Link to="/" className="btn bg-red-500 text-white"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default studentData