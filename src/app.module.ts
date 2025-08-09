import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsService } from './doctors/doctors.service';
import { QueueController } from './queue/queue.controller';
import { QueueService } from './queue/queue.service';
import { AppointmentsController } from './appointments/appointments.controller';
import { AppointmentsService } from './appointments/appointments.service';

@Module({
  imports: [],
  controllers: [AppController, DoctorsController,QueueController,
    AppointmentsController,], // <-- Add DoctorsController here
  providers: [AppService, DoctorsService, QueueService,
    AppointmentsService,],       // <-- Add DoctorsService here
})
export class AppModule {}
