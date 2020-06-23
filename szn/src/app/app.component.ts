import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'szn';
  apiUrl = 'http://sznwithsalt.com/wp-json/wp/v2';
  posts: any;

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.http.get(this.apiUrl + '/posts')
    .subscribe(
      posts => {
        console.log(posts)
        this.posts = posts;
      }
    )
  }

}
