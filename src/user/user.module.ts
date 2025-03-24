import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ 
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
