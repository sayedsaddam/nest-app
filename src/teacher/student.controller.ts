import { Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto  } from "../student/dto/student.dto";
 
@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
    @Get()
    getStudents(): FindStudentResponseDto[] {
        return 'Get all students that belong to the teacher.';
    }
    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return 'return something'; 
    }
}