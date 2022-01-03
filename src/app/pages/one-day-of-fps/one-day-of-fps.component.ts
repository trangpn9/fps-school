import { Component, OnInit, Inject } from '@angular/core';
import { GetDataAboutUsService } from '../../services/get-data-about-us.service'
import { Title, Meta } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
  selector: 'app-one-day-of-fps',
  templateUrl: './one-day-of-fps.component.html',
  styleUrls: ['./one-day-of-fps.component.scss']
})
export class OneDayOfFpsComponent implements OnInit {

  data:object;  

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this._getData.getDataPageById('165').subscribe((data: object) => {      
      this.data = {...data};      
      this.title.setTitle(this.data['title']['rendered']  + ' | FPS School - Hà Nội'); 
      this.i18NextService.addResourceBundle('en', 'translation', {
        titlePage: this.data['acf']['title_english'],
        contentPage: this.data['acf']['content_english'],
      }, true, true);
      this.i18NextService.addResourceBundle('vn', 'translation', {
        titlePage: this.data['title']['rendered'],
        contentPage: this.data['content']['rendered'],
      }, true, true);      
    });
  }

}
