import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { ModelsModule } from './models/models.module';
import { ProductsModule } from './products/products.module';
import { EventsModule } from './events/events.module';
import { PhotosModule } from './photos/photos.module';
import { MembershipsModule } from './memberships/memberships.module';

@Module({
  imports: [
  
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'santiago1',
      database: process.env.DATABASE_NAME || 'la_care_cortada',
      autoLoadEntities: true,
      synchronize: true, 
    }),
   
    AuthModule,
    ModelsModule,
    ProductsModule,
    EventsModule,
    PhotosModule,
    MembershipsModule,
  ],
  providers: [
    
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
