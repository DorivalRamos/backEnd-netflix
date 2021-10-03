/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FilmesModule } from './filmes/filmes.module';
import { GenerosModule } from './generos/generos.module';
import { ParticipantesModule } from './participantes/participantes.module';

@Module({
  imports: [PrismaService, FilmesModule, GenerosModule, ParticipantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
