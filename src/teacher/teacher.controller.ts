import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { FindTeacherReponseDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
@Controller('teachers')
export class TeacherController{
    constructor(private readonly teacherService: TeacherService){}
    @Get()
     getTeachers(): FindTeacherReponseDto[] {
        return this.teacherService.getTeachers();
    }
    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ): FindTeacherReponseDto {
        return this.teacherService.getTeacherById(teacherId);
    }
}