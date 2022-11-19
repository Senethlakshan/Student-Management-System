package com.example.studentManagenent;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
@Transactional
public class StudentService {

   @Autowired
   private StudentRepository studentRepository;

    public List<Student> listAllStudent() {
        return studentRepository.findAll();
    }

    public Student getStudent(Integer id) {
        return studentRepository.findById(id).get();
    }

    public void saveStudent(Student std) {
        studentRepository.save(std);
    }

    public void deleteStudent(Integer id) {
        studentRepository.deleteById(id);
    }



}

