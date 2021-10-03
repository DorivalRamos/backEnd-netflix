import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';

import { participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post('post')
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateParticipanteDto): Promise<participante> {
    return this.participantesService.create(data);
  }

  @Get('getAll')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<participante[]> {
    return this.participantesService.findAll();
  }

  @Get('getById/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.findOne(+id);
  }

  @Patch('patch/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateParticipanteDto,
  ) {
    return this.participantesService.update(+id, data);
  }

  @Delete('del/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.remove(+id);
  }

  @Delete('del/all')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return this.participantesService.removeAll();
  }
}
