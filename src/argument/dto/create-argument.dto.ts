import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
export class CreateArgumentDto {
  @ApiProperty({
    description: "The actual question",
    example: "A sample question",
  })
  @IsNotEmpty()
  // @Length(3, 255)
  argument?: string;

  @ApiProperty({
    description: "The quiz id to which the question is associated.",
    example: 1,
  })
  @IsNotEmpty()
  chapterId?: number;
}
