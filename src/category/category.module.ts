import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/common/entities/user.entity';
import { Category } from './entities/category.entity';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { ArgumentService } from 'src/argument/argument.service';
import { Argument } from 'src/argument/entities/argument.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { ChapterService } from 'src/chapter/chapter.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Todo, Category, Argument, Chapter])],
  controllers: [CategoryController],
  providers: [ChapterService,CategoryService, ArgumentService, TodoService, UserService, AuthService, JwtService,CaslAbilityFactory],
})
export class CategoryModule {}
