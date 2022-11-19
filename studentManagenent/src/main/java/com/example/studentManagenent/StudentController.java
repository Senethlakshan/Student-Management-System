package com.example.studentManagenent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;

    //Get all Student details
    @GetMapping("/allStudent")
    public List<Student> list() {
        return studentService.listAllStudent();
    }

    //Get a student by id
    @GetMapping("/getStudentById/{id}")
    public ResponseEntity<Student> get(@PathVariable Integer id) {
        try {
            Student std= studentService.getStudent(id);
            return new ResponseEntity<Student>(std, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

  //Add new student
    @PostMapping(path="/addStudent")
   public @ResponseBody String add(@RequestBody Student std) {
       studentService.saveStudent(std);
        return "Saved";
   }

    //Update student details
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Student std, @PathVariable Integer id) {
        try {
            Student existUser = studentService.getStudent(id);
            std.setStudentId(id);
            studentService.saveStudent(std);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete student details
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable Integer id) {
        try{
            studentService.deleteStudent(id);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;
    }




}
