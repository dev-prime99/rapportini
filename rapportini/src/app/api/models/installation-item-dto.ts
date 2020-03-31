/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface InstallationItemDto {
  article?: null | ArticleDto;
  description?: null | string;
  identity?: null | string;
  installationDate?: string;
  measureUnit?: null | string;
  notes?: null | string;
  quantity?: number;
  uninstallationDate?: null | string;
}
