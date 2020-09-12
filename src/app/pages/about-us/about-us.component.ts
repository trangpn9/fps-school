import { Component, Inject, OnInit } from '@angular/core';
import { GetDataAboutUsService } from '../../services/get-data-about-us.service'
import { Title, Meta } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  data:object;  

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {    
    this._getData.getDataPageById('12').subscribe((data: object) => {      
      this.data = {...data}      
      this.title.setTitle(this.data['title']['rendered']  + ' | FPS School - Hà Nội'); 
      this.i18NextService.addResourceBundle('en', 'translation', {
        titlePage: this.data['acf']['title_english'],
        contentPage: this.data['acf']['content_english'],
      }, true, true);
      this.i18NextService.addResourceBundle('vn', 'translation', {
        titlePage: this.data['title']['rendered'],
        contentPage: this.data['content']['rendered'],
      }, true, true);      
    })
  }

}
