import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [UserModule],
  providers: [AuthService],
})
export class AuthModule {}
