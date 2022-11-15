import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { Repository } from "typeorm";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";
import { Chapter } from "./entities/chapter.entity";

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>
  ) {}

  async createChapter(chapter: CreateChapterDto): Promise<Chapter> {
    return await this.chapterRepository.save(chapter);
  }

  async findAll(chapter): Promise<Chapter[]> {
    const chapters = await this.chapterRepository.find({
      relations: ["argument", "benefit"],
    });
    return chapters;
  }

  async findOneChapter(id: number): Promise<Chapter> {
    const foundedChapter = await this.chapterRepository.findOne({
      where: { id: id },
      relations: ["argument", "benefit"],
    });
    return foundedChapter;
  }

  async findOneArgument(id: number): Promise<Chapter> {
    const foundedChapter = await this.chapterRepository.findOne({
      where: { id: id },
      relations: ["argument"],
    });
    return foundedChapter;
  }

  async findOneBenefit(id: number): Promise<Chapter> {
    const foundedChapter = await this.chapterRepository.findOne({
      where: { id: id },
      relations: ["benefit"],
    });
    return foundedChapter;
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
