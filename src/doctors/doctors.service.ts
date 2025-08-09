import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorsService {
  // In a real app, this data would come from your MySQL database via TypeORM.
  private readonly doctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'General Practice', status: 'Available', nextAvailable: 'Now' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Pediatrics', status: 'Busy', nextAvailable: '2:30 PM' },
    { id: 3, name: 'Dr. Lee', specialty: 'Cardiology', status: 'Off Duty', nextAvailable: 'Tomorrow 9:00 AM' },
    { id: 4, name: 'Dr. Patel', specialty: 'Dermatology', status: 'Available', nextAvailable: 'Now' },
  ];

  findAll() {
    return this.doctors;
  }
}
