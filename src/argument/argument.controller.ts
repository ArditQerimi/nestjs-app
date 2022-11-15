import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ChapterService } from "src/chapter/chapter.service";

import { ArgumentService } from "./argument.service";
import { CreateArgumentDto } from "./dto/create-argument.dto";
import { UpdateArgumentDto } from "./dto/update-argument.dto";
import { Argument } from "./entities/argument.entity";

@Controller("argument")
export class ArgumentController {
  constructor(
    private argumentService: ArgumentService,
    private chapterService: ChapterService
  ) {}

  @Post()
  async create(@Body() argument: CreateArgumentDto): Promise<Argument> {
    const chapter = await this.chapterService.findOneArgument(
      argument.chapterId
    );

    return this.argumentService.createArgument(argument, chapter);
  }

  @Get()
  findAll(@Req() req: any) {
    return;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.argumentService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateArgumentDto: UpdateArgumentDto
  ) {
    return this.argumentService.update(+id, updateArgumentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.argumentService.remove(+id);
  }
}
