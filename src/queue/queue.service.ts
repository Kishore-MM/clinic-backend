import { Injectable } from '@nestjs/common';

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
}