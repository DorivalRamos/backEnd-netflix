import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('post')
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get('get')
  findAll() {
    return this.filmesService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() updateFilmeDto: CreateFilmeDto) {
    return this.filmesService.update(+id, updateFilmeDto);
  }

  @Delete('del/:id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
