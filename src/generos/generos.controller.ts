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
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { genero } from '.prisma/client';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post('post')
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateGeneroDto): Promise<genero> {
    return this.generosService.create(data);
  }

  @Get('get')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<genero[]> {
    return this.generosService.findAll();
  }

  @Get('getById/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.generosService.findOne(+id);
  }

  @Patch('patch/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateGeneroDto,
  ) {
    return this.generosService.update(+id, data);
  }

  @Delete('del/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.generosService.remove(+id);
  }

  @Delete('delAll')
  @UsePipes(ValidationPipe)
  async removeAll() {
    return this.generosService.removeAll();
  }
}
