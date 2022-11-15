import { Module } from "@nestjs/common";
import { User } from "src/common/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { CaslAbilityFactory } from "src/casl/casl-ability.factory";
import { Category } from "src/category/entities/category.entity";
import { ChapterService } from "./chapter.service";
import { ChapterController } from "./chapter.controller";
import { Chapter } from "./entities/chapter.entity";
import { Argument } from "src/argument/entities/argument.entity";
import { BenefitEntity } from "../benefits/entities/benefitEntity";
import { BenefitService } from "../benefits/benefit.service";
import { ArgumentService } from "../argument/argument.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Chapter,
      Category,
      Argument,
      BenefitEntity,
    ]),
  ],
  controllers: [ChapterController],
  providers: [
    BenefitService,
    ChapterService,
    ArgumentService,
    AuthService,
    JwtService,
    CaslAbilityFactory,
  ],
})
export class ChapterModule {}
