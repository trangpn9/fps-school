import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { GetDataAboutUsService } from 'src/app/services/get-data-about-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data:object;

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._getData.getDataPageById('27').subscribe((data: object) => {      
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
