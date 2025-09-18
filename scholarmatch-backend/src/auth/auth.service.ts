import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/entities/user.schema';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      const user = await this.userService.create({
        ...createUserDto,
        password: hashedPassword,
      });

      const payload = {
        sub: (user as UserDocument)._id,
        username: user.username,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch {
      throw new UnauthorizedException('User creation failed');
    }
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordMatching = await bcrypt.compare(
      signInDto.password,
      user.password,
    );
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: (user as UserDocument)._id,
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
