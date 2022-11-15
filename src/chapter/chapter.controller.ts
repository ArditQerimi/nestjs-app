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

import { SigninDto } from "src/common/dtos/auth.dto";
import { ChapterService } from "./chapter.service";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";
import { Chapter } from "./entities/chapter.entity";

@Controller("chapter")
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  async create(@Body() chapterData: CreateChapterDto): Promise<Chapter> {
    return await this.chapterService.createChapter(chapterData);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.chapterService.findAll(req);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.chapterService.findOneChapter(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChapterDto: UpdateChapterDto) {
    return this.chapterService.update(+id, updateChapterDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chapterService.remove(+id);
  }
}
