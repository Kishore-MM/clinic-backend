import { Controller, Get } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors') // This means this controller handles requests to /doctors
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get() // This handles GET requests
  findAll() {
    return this.doctorsService.findAll();
  }
}