import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './entities/model.entity';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  
  async findAll(): Promise<Model[]> {
    return this.modelRepository.find();
  }

 
  async findOne(id: number): Promise<Model> {
    const model = await this.modelRepository.findOne({ where: { id } });
    if (!model) {
      throw new NotFoundException(`Model with ID ${id} not found`);
    }
    return model;
  }

  
  async create(createModelDto: CreateModelDto): Promise<Model> {
    const newModel = this.modelRepository.create(createModelDto);
    return this.modelRepository.save(newModel);
  }

  async update(id: number, updateModelDto: UpdateModelDto): Promise<Model> {
    const model = await this.findOne(id); 
    Object.assign(model, updateModelDto); 
    return this.modelRepository.save(model); 
  }

  async remove(id: number): Promise<void> {
    const model = await this.findOne(id); 
    await this.modelRepository.remove(model);
  }
}
