import { ApiProperty } from "@nestjs/swagger";
import { Argument } from "src/argument/entities/argument.entity";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BenefitEntity } from "../../benefits/entities/benefitEntity";

@Entity("chapter")
export class Chapter extends BaseEntity {
  @ApiProperty({ description: "Primary key as Quiz ID", example: 1 })
  @PrimaryGeneratedColumn({
    comment: "The quiz unique identifier",
  })
  id: number;

  @ApiProperty({
    description: "Title of the quiz",
    example: "Sample Laravel quiz",
  })
  @Column({
    type: "varchar",
  })
  chapter?: string;

  @ApiProperty({
    description: "Description of the quiz",
    example: "Lorem ipsum",
  })
  @Column({
    type: "text",
  })
  description?: string;

  @ApiProperty({
    description: "List of questions",
  })
  @OneToMany(() => Argument, (argument) => argument.chapter)
  argument?: Argument[];

  @OneToMany(() => BenefitEntity, (benefit) => benefit.chapter)
  benefit?: BenefitEntity[];
}
