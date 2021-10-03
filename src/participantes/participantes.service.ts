import { participante, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: Prisma.participanteCreateInput): Promise<participante> {
    return this.prisma.participante.create({ data });
  }

  findAll() {
    return this.prisma.participante.findMany({});
  }

  findOne(id: number) {
    return this.prisma.participante.findMany({ where: { id } });
  }

  update(id: number, data: Prisma.generoCreateInput) {
    return this.prisma.participante.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.participante.delete({ where: { id } });
  }

  removeAll() {
    return this.prisma.participante.deleteMany();
  }
}
