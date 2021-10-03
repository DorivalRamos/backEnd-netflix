import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';

import { CreateFilmeDto } from './dto/create-filme.dto';
import { Prisma, filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('post')
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateFilmeDto): Promise<filme> {
    return this.filmesService.create(data);
  }

  @Get('get')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<filme[]> {
    return this.filmesService.findAll();
  }

  @Get('getById/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.findOne(+id);
  }

  @Patch('patch/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateFilmeDto,
  ) {
    return this.filmesService.update(+id, data);
  }

  @Delete('del/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.remove(+id);
  }

  @Delete('delAll')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return this.filmesService.removeAll();
  }
}
