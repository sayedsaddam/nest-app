import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";

@Controller('students')
export class StudentController{
    @Get()
    getStudents(): FindStudentResponseDto[] {
        return 'All Students';
    }
    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ): FindStudentResponseDto {
        return `Get student with ID of ${studentId}`;
    }
    @Post()
    createStudent(
        @Body() body: CreateStudentDto 
    ): FindStudentResponseDto {
        return `Create student with the following data ${JSON.stringify(body)}`;
    }
    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return `Update student with the ID of ${studentId} with data of ${JSON.stringify(body)}`;
    }
}