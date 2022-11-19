import axios from "axios";
import React from "react";

const  REST_API_URL = 'http://localhost:8080/api'

class studentService{

    allStudents(){
       
        return axios.get(`${REST_API_URL}/allStudent`);
    }

    // addStudent(employee){
      
    //     return axios.post(REST_API_URL,employee);
    // }

    // updateStudent(employeeId, employee){
    //     return axios.put(REST_API_URL + '/' +employeeId, employee);
    // }

    deleteStudent(studentId){
        return axios.delete(REST_API_URL + '/delete/' + studentId);
    }

}

export default new studentService();