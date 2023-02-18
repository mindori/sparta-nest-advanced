import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SkipThrottle, Throttle } from "@nestjs/throttler";
import { BoardService } from "./board.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { DeleteArticleDto } from "./dto/delete-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

@Controller("board")
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @SkipThrottle()
  @Get("/articles")
  async getArticles() {
    return await this.boardService.getArticles();
  }

  @Throttle(5, 60)
  @Get("/articles/:id")
  async getArticleById(@Param("id") articleId: number) {
    return await this.boardService.getArticleById(articleId);
  }

  @Get("/hot-articles")
  async getHotArticles() {
    return await this.boardService.getHotArticles();
  }

  @Post("/articles")
  createArticle(@Body() data: CreateArticleDto) {
    return this.boardService.createArticle(
      data.title,
      data.content,
      data.password
    );
  }

  @Put("/articles/:id")
  async updateArticle(
    @Param("id") articleId: number,
    @Body() data: UpdateArticleDto
  ) {
    return await this.boardService.updateArticle(
      articleId,
      data.title,
      data.content,
      data.password
    );
  }

  @Delete("/articles/:id")
  async deleteArticle(
    @Param("id") articleId: number,
    @Body() data: DeleteArticleDto
  ) {
    return this.boardService.deleteArticle(articleId, data.password);
  }
}
