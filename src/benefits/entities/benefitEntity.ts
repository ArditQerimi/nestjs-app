import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chapter } from '../../chapter/entities/chapter.entity';

@Entity('benefit')
export class BenefitEntity extends BaseEntity {
  @ApiProperty({ description: 'Primary key as Quiz ID', example: 1 })
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'Title of the quiz',
    example: 'Sample Laravel quiz',
  })
  @Column({
    type: 'varchar',
  })
  benefit?: string;

  @ApiProperty({
    description: 'Description of the quiz',
    example: 'Lorem ipsum',
  })



  @ApiProperty({
    description: 'List of questions',
  })
  @ManyToOne(() => Chapter, (chapter) => chapter.benefit)
  chapter?: Chapter;
}
