import { Module } from "@nestjs/common";
import { User } from "src/common/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { Category } from "src/category/entities/category.entity";
import { BenefitService } from "./benefit.service";
import { BenefitController } from "./benefitController";
import { Argument } from "src/argument/entities/argument.entity";
import { CaslAbilityFactory } from "../casl/casl-ability.factory";
import { Chapter } from "../chapter/entities/chapter.entity";
import { ChapterService } from "../chapter/chapter.service";
import { BenefitEntity } from "./entities/benefitEntity";

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
  controllers: [BenefitController],
  providers: [
    ChapterService,
    BenefitService,
    AuthService,
    JwtService,
    CaslAbilityFactory,
    BenefitService,
  ],
})
export class BenefitModule {}
