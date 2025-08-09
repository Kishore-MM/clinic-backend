import { Controller, Get, Post, Body } from '@nestjs/common';
import { QueueService, CreatePatientDto } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  findAll() {
    return this.queueService.findAll();
  }

  @Post() // This decorator handles POST requests
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.queueService.create(createPatientDto);
  }
}
