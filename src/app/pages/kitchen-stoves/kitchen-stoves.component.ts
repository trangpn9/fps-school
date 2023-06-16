import { Component, OnInit, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { GetDataAboutUsService } from './../../services/get-data-about-us.service';

@Component({
  selector: 'app-kitchen-stoves',
  templateUrl: './kitchen-stoves.component.html',
  styleUrls: ['./kitchen-stoves.component.scss']
})
export class KitchenStovesComponent implements OnInit {
  data:object;

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this._getData.getDataPageById('229').subscribe((data: object) => {      
      this.data = {...data}        
      this.title.setTitle('Bếp ăn & Chế độ dinh dưỡng | FPS School - Hà Nội | FPS School - Hà Nội');
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
