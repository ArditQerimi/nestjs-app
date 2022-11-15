import { Controller, Post, Body, Patch, Param, Delete } from "@nestjs/common";

import { BenefitService } from "./benefit.service";
import { CreateBenefitDto } from "./dto/create-benefit.dto";
import { UpdateBenefitDto } from "./dto/update-benefit.dto";
import { BenefitEntity } from "./entities/benefitEntity";
import { ChapterService } from "../chapter/chapter.service";

@Controller("benefit")
export class BenefitController {
  constructor(
    private readonly benefitService: BenefitService,
    private chapterService: ChapterService
  ) {}

  @Post()
  async create(@Body() benefitsData: CreateBenefitDto): Promise<BenefitEntity> {
    const chapter = await this.chapterService.findOneBenefit(
      benefitsData.chapterId
    );
    return await this.benefitService.createBenefits(benefitsData, chapter);
  }

  //   @Get()
  //   findAll(@Req() req: any) {
  // return
  //   }
  //
  //   @Get(':id')
  //   findOne(@Param('id') id: number) {
  //     return this.benefitService.findOne(id);
  //   }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
    return this.benefitService.update(+id, updateBenefitDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.benefitService.remove(+id);
  }
}
