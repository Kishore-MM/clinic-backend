import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsService } from './doctors/doctors.service';

@Module({
  imports: [],
  controllers: [AppController, DoctorsController], // <-- Add DoctorsController here
  providers: [AppService, DoctorsService],       // <-- Add DoctorsService here
})
export class AppModule {}
