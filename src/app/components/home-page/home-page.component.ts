import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.title.setTitle('FPS - School');
    this.meta.updateTag({ name: 'description', content: 'FPS - School' });
  }

}
