import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "./article.entity";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
