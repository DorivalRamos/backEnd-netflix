import { Injectable } from '@nestjs/common';
import { Prisma, filme } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: Prisma.filmeCreateInput): Promise<filme> {
    return this.prisma.filme.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.filme.findMany({
      include: {
        genero: {
          select: { nome: true },
        },
        participante: {
          select: { nome: true },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: {
        id,
      },
      include: {
        genero: {
          select: { nome: true },
        },
      },
    });
  }

  async update(id: number, data: Prisma.filmeCreateInput): Promise<filme> {
    return this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.filme.delete({
      where: { id },
    });
  }

  async removeAll() {
    return this.prisma.filme.deleteMany({});
  }
}
