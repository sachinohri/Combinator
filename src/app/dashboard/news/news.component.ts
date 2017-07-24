import { Component, OnInit } from '@angular/core';
import {News} from '../../../models/news';
import {Article} from '../../../models/article';


@Component({
  selector: 'snc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  latest_news: News = new News();
  
  constructor() {
  }

  ngOnInit() {
    this.latest_news = this.seedNewsData();
  }
  
  private seedNewsData(): News{
    let news:News= new News();
    news.status = "ok";
    news.source="nfl";
    news.sortBy="top";
    news.articles = this.seedArcticles();
    return news;

  }
  private seedArcticles():Article[]{
    let articles:Article[] = new Array();
    articles.push({
            author:"Lakisha Jackson",
            title:"Mike Williams denies report on season-ending surgery",
            description:"Los Angeles Chargers first-round pick Mike Williams is denying reports that he might need season-ending back surgery. The rookie wideout addressed the rumors during Alshon Jeffery's camp on Saturday.",
            url:"http://www.nfl.com/news/story/0ap3000000821316/article/mike-williams-denies-report-on-seasonending-surgery",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821315_thumbnail_200_150.jpg",
            publishedAt:"2017-07-22T23:21:00Z"
            });
        articles.push({
            author:"Jeremy Bergman",
            title:"Tamba Hali, upset with snaps, launches tweetstorm",
            description:"We've got ourselves a Saturday afternoon tweetstorm in late July, courtesy of Chiefs pass rusher Tamba Hali. The veteran bemoaned his lack of snaps in the Chiefs' playoff loss to Pittsburgh.",
            url:"http://www.nfl.com/news/story/0ap3000000821309/article/tamba-hali-upset-with-snaps-launches-tweetstorm",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821310_thumbnail_200_150.jpg",
            publishedAt:"2017-07-22T20:30:00Z"
            });

    return articles;
  }

}


