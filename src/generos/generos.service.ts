/* eslint-disable prettier/prettier */
import { Prisma, genero } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.generoCreateInput): Promise<genero> {
    return this.prisma.genero.create({ data });
  }

  findAll() {
    return this.prisma.genero.findMany({});
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.generoCreateInput): Promise<genero> {
    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }

  removeAll() {
    return this.prisma.genero.deleteMany();
  }
}
