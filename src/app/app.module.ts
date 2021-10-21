import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [TeacherModule, StudentModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
