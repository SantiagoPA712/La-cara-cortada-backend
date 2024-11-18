import { IsString, IsDecimal, IsArray, IsOptional } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  tier: string;

  @IsString()
  benefits: string;

  @IsDecimal()
  price: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  restrictedActivities?: string[];
}
