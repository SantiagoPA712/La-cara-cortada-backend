import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from './auth.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([User]),

    
    PassportModule,

    
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,   
    JwtStrategy,   
    AuthGuard,     
    Reflector,     
  ],
  controllers: [AuthController], 
  exports: [
    AuthService,  
    JwtModule,     
  ],
})
export class AuthModule {}

