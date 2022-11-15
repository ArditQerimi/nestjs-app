import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateChapterDto } from './create-chapter.dto';

export class UpdateChapterDto extends PartialType(CreateChapterDto) {
  @IsString()
  chapter: string;
}
