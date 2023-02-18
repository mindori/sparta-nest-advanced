import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "./article.entity";
import { ArticleRepository } from "./article.repository";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [BoardController],
  providers: [BoardService, ArticleRepository],
})
export class BoardModule {}
