import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

 
  async findOne(id: number): Promise<Photo> {
    const photo = await this.photoRepository.findOne({ where: { id } });
    if (!photo) {
      throw new NotFoundException(`Photo with ID ${id} not found`);
    }
    return photo;
  }

 
  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const newPhoto = this.photoRepository.create(createPhotoDto);
    return this.photoRepository.save(newPhoto);
  }

 
  async update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
    const photo = await this.findOne(id);
    Object.assign(photo, updatePhotoDto); 
    return this.photoRepository.save(photo); 
  }


  async remove(id: number): Promise<void> {
    const photo = await this.findOne(id); 
    await this.photoRepository.remove(photo);
  }
}
