import React, {useState,useEffect} from 'react'
import {Link, useHistory,useParams } from 'react-router-dom';
import studentService from '../service/studentService';

const updateStudent = () => {

    const [studentId, setbookID] = useState('')
    const [studentName, setbookName] = useState('')
    const [address, setbookAuthor] = useState('')
    const [dob, setprice] = useState('')
    const [teleNumber, setquntity] = useState('')
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

        EmployeeService.getEmployeeById(id).then((response) =>{
            setbookID(response.data.book_id)
            setbookName(response.data.book_name)
            setbookAuthor(response.data.book_author)
            setprice(response.data.price)
            setquntity(response.data.quntity)
            setdescription(response.data.description)

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
                                        value = {book_id}
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
                                        value = {book_name}
                                        onChange = {(e) => setbookName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Book author :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "book author "
                                        className = "form-control"
                                        value = {book_author}
                                        onChange = {(e) => setbookAuthor(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setprice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Quntity :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "quntity"
                                        className = "form-control"
                                        value = {quntity}
                                        onChange = {(e) => setquntity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Description :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter quntity"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setdescription(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default updateStudent
