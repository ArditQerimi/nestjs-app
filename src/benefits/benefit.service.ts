import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBenefitDto } from "./dto/create-benefit.dto";
import { UpdateBenefitDto } from "./dto/update-benefit.dto";
import { BenefitEntity } from "./entities/benefitEntity";
import { Chapter } from "../chapter/entities/chapter.entity";

@Injectable()
export class BenefitService {
  constructor(
    @InjectRepository(BenefitEntity)
    private benefitRepository: Repository<BenefitEntity>
  ) {}

  async createBenefits(
    benefitDto: CreateBenefitDto,
    chapter: Chapter
  ): Promise<BenefitEntity> {
    const newBenefit = await this.benefitRepository.save({
      benefit: benefitDto.benefit,
    });

    chapter.benefit = [...chapter.benefit, newBenefit];

    await chapter.save();
    return newBenefit;
  }

  // async findAll(benefit): Promise<BenefitEntity[]> {
  //   return "Test";
  // }
  //
  // async findOne(id: number): Promise<BenefitEntity> {
  //   return `This action returns a #${id} todo`;
  // }

  update(id: number, updateBenefitsDto: UpdateBenefitDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
