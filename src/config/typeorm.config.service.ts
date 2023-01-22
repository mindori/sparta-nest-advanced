import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Article } from "src/board/article.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "mysql",
      host: "database-1.cjjbbiidjm5b.ap-northeast-2.rds.amazonaws.com",
      port: 3306,
      username: "admin",
      password: "wjdwlsdyd",
      database: "board",
      entities: [Article],
      synchronize: true, // Production 환경에서는 false로 설정해야 합니다.
    };
  }
}
