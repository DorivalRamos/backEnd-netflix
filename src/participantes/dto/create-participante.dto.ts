import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateParticipanteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
  imagem: string;
  staff: string;

  @IsNumber()
  @IsNotEmpty()
  filme: number;
}
