import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './entities/membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectRepository(Membership)
    private readonly membershipRepository: Repository<Membership>,
  ) {}

  async findAll(): Promise<Membership[]> {
    return this.membershipRepository.find();
  }

  async findOne(id: number): Promise<Membership> {
    const membership = await this.membershipRepository.findOne({ where: { id } });
    if (!membership) {
      throw new NotFoundException(`Membership with ID ${id} not found`);
    }
    return membership;
  }

  async create(createMembershipDto: CreateMembershipDto): Promise<Membership> {
    const newMembership = this.membershipRepository.create(createMembershipDto);
    return this.membershipRepository.save(newMembership);
  }

  async update(id: number, updateMembershipDto: UpdateMembershipDto): Promise<Membership> {
    const membership = await this.findOne(id);
    Object.assign(membership, updateMembershipDto);
    return this.membershipRepository.save(membership);
  }

  async remove(id: number): Promise<void> {
    const membership = await this.findOne(id);
    await this.membershipRepository.remove(membership);
  }
}
