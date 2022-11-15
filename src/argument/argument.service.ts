import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chapter } from "src/chapter/entities/chapter.entity";
import { Repository } from "typeorm";
import { CreateArgumentDto } from "./dto/create-argument.dto";
import { UpdateArgumentDto } from "./dto/update-argument.dto";
import { Argument } from "./entities/argument.entity";

@Injectable()
export class ArgumentService {
  constructor(
    @InjectRepository(Argument)
    private readonly argument: Repository<Argument>
  ) {}

  async createArgument(
    argumentDto: CreateArgumentDto,
    chapter: Chapter
  ): Promise<Argument> {
    const newArgument = await this.argument.save({
      argument: argumentDto.argument,
    });

    chapter.argument = [...chapter.argument, newArgument];

    console.log(chapter);

    await chapter.save();
    return newArgument;
  }

  async findAll(user): Promise<[]> {
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateArgumentDto: UpdateArgumentDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
