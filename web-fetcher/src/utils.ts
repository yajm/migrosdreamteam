import * as fs from 'fs';
import * as path from 'path';

export function readJson(path: string) {
  return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
}

export function writeJson(path: string, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
export function existsArticle(id: string) {
  return fs.existsSync(path.join(process.cwd(), `assets/articles/${id}.json`));
}
export function getDeepestCategory(article: any) {
  let deepestCategory = null;
  for (const category of article.categories || []) {
    if (deepestCategory == null || deepestCategory.level < category.level) {
      deepestCategory = category;
    }
  }
  return deepestCategory;
}
