import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentsService {
  // Mock data for appointments
  private readonly appointments = [
    { id: 1, patientName: 'Alice Brown', doctorName: 'Dr. Smith', time: '10:00 AM', status: 'Booked' },
    { id: 2, patientName: 'Charlie Davis', doctorName: 'Dr. Johnson', time: '11:30 AM', status: 'Booked' },
    { id: 3, patientName: 'Eva White', doctorName: 'Dr. Lee', time: '2:00 PM', status: 'Booked' },
  ];

  findAll() {
    return this.appointments;
  }
}