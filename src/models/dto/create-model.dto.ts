import { IsString, IsOptional } from 'class-validator';

export class CreateModelDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  portfolio?: string;

  @IsOptional()
  @IsString()
  bookingInfo?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsString()
  achievements?: string;
}
