import { ApiProperty } from "@nestjs/swagger";
import { Chapter } from "src/chapter/entities/chapter.entity";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("argument")
export class Argument extends BaseEntity {
  @ApiProperty({
    description: "The primary ID of question.",
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    description: "The actual question",
    example: "What is the question?",
  })
  @Column({
    type: "varchar",
  })
  argument?: string;

  @ApiProperty({
    description: "Quiz of the question",
  })
  @ManyToOne(() => Chapter, (chapter) => chapter.argument)
  chapter?: Chapter;
}
