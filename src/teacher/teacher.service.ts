import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherReponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;
    getTeachers(): FindTeacherReponseDto[] {
        return this.teachers;
    }
    getTeacherById(teacherId: string): FindTeacherReponseDto{
        return this.teachers.find(teacher => {
            return teacher.id === teacherId;
        })
    }
}