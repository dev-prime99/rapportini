/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface ArticleDtoBaseResult {
  error?: null | string;
  ok?: boolean;
  result?: null | ArticleDto;
}
