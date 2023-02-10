import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import _ from "lodash";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(name: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { name, deletedAt: null },
      select: ["id", "password"],
    });

    if (_.isNil(user)) {
      throw new NotFoundException(`User not found. name: ${name}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException(
        `User password is not correct. name: ${name}`
      );
    }

    const payload = { id: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  createUser(userId: string, name: string, password: string) {
    this.userRepository.insert({
      userId,
      name,
      password,
    });
  }

  async updateUser(id: number, name: string, password: string) {
    this.userRepository.update(id, { name, password });
  }

  async getUserInfo(id: number) {
    return await this.userRepository.findOne({
      where: { id, deletedAt: null },
      select: ["name"], // 이외에도 다른 정보들이 필요하면 리턴해주면 됩니다.
    });
  }
}
