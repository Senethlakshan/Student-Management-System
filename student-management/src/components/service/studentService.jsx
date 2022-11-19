import axios from "axios";
import React from "react";

const  REST_API_URL = 'http://localhost:8080/api'

class studentService{

    allStudents(){
       
        return axios.get(`${REST_API_URL}/allStudent`);
    }

    // addStudent(student){
      
    //     return axios.post(REST_API_URL,student);
    // }

    // updateStudent(studentId, student){
    //     return axios.put(REST_API_URL + '/' +studentId, student);
    // }

    deleteStudent(studentId){
        return axios.delete(REST_API_URL + '/delete/' + studentId);
    }

    
    // getStudentById(studentId){
    //     return axios.get(REST_API_URL + '/' + studentId);
      
    // }

}

export default new studentService();