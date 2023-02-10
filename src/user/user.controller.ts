import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/login")
  async login() {
    return await this.userService.login("test", "test");
  }

  @Post("/signup")
  createUser() {
    this.userService.createUser("test", "test");
  }
}
