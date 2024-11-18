import { IsString, IsOptional, IsDecimal } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  url: string;

  @IsDecimal()
  price: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString({ each: true })
  formatsAvailable?: string[];
}
