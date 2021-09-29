import { IsOptional, IsString } from 'class-validator';
import { Prisma } from '.prisma/client';

export class CreateFilmeDto {
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  imagem?: string;

  @IsString()
  data_lancamento: string;

  @IsString()
  tempo_duracao: string;

  @IsOptional()
  genero: Prisma.generoUncheckedCreateNestedManyWithoutFilme_filmeTogeneroInput;

  @IsOptional()
  participante: Prisma.participanteUncheckedCreateNestedManyWithoutFilme_filmeToparticipanteInput;
}
