import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateFilmeDto) {
    return this.prisma.filme.create({
      data,
    });
  }

  findAll() {
    return this.prisma.filme.findMany({});
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: CreateFilmeDto) {
    return this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.filme.delete({
      where: { id },
    });
  }
}
