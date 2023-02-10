import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/login")
  async login() {
    return await this.userService.login("test3", "test3");
  }

  @Post("/signup")
  async createUser() {
    return await this.userService.createUser("test3", "test3", "test3");
  }
}
