import { Controller, Get, Param } from "@nestjs/common";
import { FindTeacherReponseDto } from "./dto/teacher.dto";
@Controller('teachers')
export class TeacherController{
    @Get()
     getTeachers(): FindTeacherReponseDto[] {
        return 'All teachers';
    }
    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ): FindTeacherReponseDto {
        return 'Teacher by ID.';
    }
}