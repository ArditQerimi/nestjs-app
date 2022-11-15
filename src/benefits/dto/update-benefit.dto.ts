import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBenefitDto } from './create-benefit.dto';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {
  @IsString()
  benefit: string;
}
