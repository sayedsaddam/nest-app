import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { students } from '../db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students = students
    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }
    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find(student => {
            return student.id === studentId
        })
    }
    createStudent(payload: CreateStudentDto): StudentResponseDto{
        let newStudent = {
            id: randomUUID(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(payload: UpdateStudentDto, studentId: string){
        let updatedStudent: StudentResponseDto;
        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
                return updatedStudent;
            }else return student;
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[]{
        return this.students.filter(student => {
           return student.teacher === teacherId
        })
    }
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto{
        let updatedStudent: StudentResponseDto;
        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updatedStudent;
            }else return student;
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
}
