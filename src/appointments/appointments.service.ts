import { Injectable, NotFoundException } from '@nestjs/common';

export class CreateAppointmentDto {
  patientName: string;
  doctorName: string;
  date: string; // e.g., "2024-12-25"
  time: string; // e.g., "10:00 AM"
}

@Injectable()
export class AppointmentsService {
  private appointments = [
    { id: 1, patientName: 'Alice Brown', doctorName: 'Dr. Smith', date: '2025-08-28', time: '10:00 AM', status: 'Booked' },
    { id: 2, patientName: 'Charlie Davis', doctorName: 'Dr. Johnson', date: '2025-08-28', time: '11:30 AM', status: 'Booked' },
  ];

  findAll() {
    return this.appointments;
  }

  create(dto: CreateAppointmentDto) {
    const newAppointment = {
      id: Math.max(...this.appointments.map(a => a.id), 0) + 1,
      ...dto,
      status: 'Booked' as const,
    };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  remove(id: number) {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    this.appointments.splice(index, 1);
    return { message: `Appointment with ID ${id} deleted` };
  }
}