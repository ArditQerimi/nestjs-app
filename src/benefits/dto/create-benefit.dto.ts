import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateBenefitDto {
  @ApiProperty({
    description: "The title of the quiz",
    example: "How good are your with Laravel?",
  })
  @IsNotEmpty()
  @Length(3, 255)
  benefit?: string;

  @ApiProperty({
    description: "A small description for the user",
    example:
      "This quiz will ask your questions on Laravel and test your knowledge.",
  })
  @IsNotEmpty()
  chapterId?: number;
}
