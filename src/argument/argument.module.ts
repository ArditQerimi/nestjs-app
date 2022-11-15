import { Module } from "@nestjs/common";
import { User } from "src/common/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Argument } from "./entities/argument.entity";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { CaslAbilityFactory } from "src/casl/casl-ability.factory";
import { Category } from "src/category/entities/category.entity";
import { ArgumentService } from "./argument.service";
import { ArgumentController } from "./argument.controller";
import { Chapter } from "src/chapter/entities/chapter.entity";
import { ChapterService } from "src/chapter/chapter.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Argument, Chapter, Category])],
  controllers: [ArgumentController],
  providers: [
    ArgumentService,
    ChapterService,
    AuthService,
    JwtService,
    CaslAbilityFactory,
  ],
})
export class ArgumentModule {}
