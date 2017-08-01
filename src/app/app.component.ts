import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 2),
      new Article('Reddit', 'http://reddit.com', 3),
      new Article('RaghibM', 'http://raghibm.com', 10),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
