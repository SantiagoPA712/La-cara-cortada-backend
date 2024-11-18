import { IsString, IsDateString, IsOptional, IsArray } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsDateString()
  date: string; 

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  featuredModels?: string[]; 

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  featuredProducts?: string[]; 
}
