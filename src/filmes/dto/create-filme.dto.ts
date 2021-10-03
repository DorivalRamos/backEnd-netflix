import { IsNotEmpty, IsOptional } from 'class-validator';
import { Prisma } from '.prisma/client';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem?: string;

  @IsNotEmpty()
  data_lancamento: string;

  @IsNotEmpty()
  tempo_duracao: string;
}
