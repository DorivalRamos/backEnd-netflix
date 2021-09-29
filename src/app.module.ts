/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [PrismaService, FilmesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
