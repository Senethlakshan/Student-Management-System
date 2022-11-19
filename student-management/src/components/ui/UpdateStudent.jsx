import React, {useState,useEffect} from 'react'
import {Link, useHistory,useParams } from 'react-router-dom';
import studentService from '../service/studentService';

const updateStudent = () => {

    const [studentId, setstudentId] = useState('')
    const [studentName, setstudentName] = useState('')
    const [address, setaddress] = useState('')
    const [dob, setdob] = useState('')
    const [teleNumber, setteleNumber] = useState('')
    const history = useHistory();
    const {id} = useParams();
  

    const addStudent =(e) =>{
    
            e.preventDefault();
    
            const student = {studentId,studentName,address,dob,teleNumber}

            
            if(id){
               
                studentService.updateStudent(id, student).then((response) => {
                    console.log(response.data)
                    history.push('/')
                }).catch(error => {
                    console.log(error)
                })
    
            }else{
                
                studentService.addStudent(student).then((response) =>{

                    console.log(response.data)
                    history.push('/')
        
                }).catch(error => {
                    console.log(error)
                })
            }
            
        
            

        
    }//save employee function

    useEffect(() => {

        studentService.getStudentById(id).then((response) =>{
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
            return <h2 className = "text-center">Update Book data</h2>
        }else{
            return <h2 className = "text-center">Add Book data</h2>
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
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {studentId}
                                        onChange = {(e) => setbookID(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "book Name "
                                        className = "form-control"
                                        value = {studentName}
                                        onChange = {(e) => setbookName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "book author "
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setbookAuthor(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date of birth :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "price"
                                        className = "form-control"
                                        value = {dob}
                                        onChange = {(e) => setprice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Telephone :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "quntity"
                                        className = "form-control"
                                        value = {teleNumber}
                                        onChange = {(e) => setquntity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => addStudent(e)} >Submit </button>
                               
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default updateStudent
