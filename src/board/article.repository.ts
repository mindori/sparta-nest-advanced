import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Article } from "./article.entity";

@Injectable()
export class ArticleRepository extends Repository<Article> {
  constructor(private dataSource: DataSource) {
    super(Article, dataSource.createEntityManager());
  }

  async getArticlesByViewCount() {
    const result = await this.createQueryBuilder()
      .select("articles")
      .from(Article, "articles")
      .orderBy("articles.view", "DESC")
      .getMany();
    return result;
  }
}
