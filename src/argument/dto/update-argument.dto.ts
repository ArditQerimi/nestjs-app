import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateArgumentDto,  } from './create-argument.dto';

export class UpdateArgumentDto extends PartialType(CreateArgumentDto) {
  @IsString()
  todo: string;
}
