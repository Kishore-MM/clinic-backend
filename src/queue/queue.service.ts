import { Injectable } from '@nestjs/common';

// This is a simple DTO (Data Transfer Object) for creating a new patient
export class CreatePatientDto {
  name: string;
  priority: 'Normal' | 'Urgent';
}

@Injectable()
export class QueueService {
  // Mock data for the patient queue
  private readonly queue = [
    { id: 1, name: 'John Doe', arrival: '09:30 AM', wait: '15 min', status: 'Waiting', priority: 'Normal' },
    { id: 2, name: 'Jane Smith', arrival: '09:45 AM', wait: '0 min', status: 'With Doctor', priority: 'Normal' },
    { id: 3, name: 'Bob Johnson', arrival: '10:00 AM', wait: '5 min', status: 'Waiting', priority: 'Urgent' },
  ];

  findAll() {
    return this.queue;
  }

  create(patientDto: CreatePatientDto) {
    const newPatient = {
      id: Math.max(...this.queue.map(p => p.id), 0) + 1, // Generate a new ID
      name: patientDto.name,
      arrival: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      wait: 'N/A', // Wait time would be calculated in a real app
      status: 'Waiting',
      priority: patientDto.priority,
    };
    this.queue.push(newPatient);
    return newPatient;
  }
}