import { Component } from '@angular/core';
import { ScrollAutoService } from './services/scroll-auto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fps-school';

  constructor(
    private _scrollService: ScrollAutoService
  ) {}

  ngOnInit() {
    this._scrollService.setScrollTop();
  }
}
