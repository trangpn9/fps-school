import { Component,Inject , OnInit } from '@angular/core';
import {GetDataPostService} from './../../services/get-data-post.service';
import { Title, Meta } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  data:object;

  constructor(    
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private _getData: GetDataPostService,
    private title: Title,
    private meta: Meta,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let slug: string;
    this.activatedRoute.params.subscribe(params => {
      slug = params['slug'];      
    });    
    this._getData.getDataPostBySlug(slug).subscribe((data: object) => {
      const getData = {...data};
      this.data = getData[0];      
      this.title.setTitle(this.data['title']['rendered']  + ' | FPS School - Hà Nội'); 
      this.i18NextService.addResourceBundle('en', 'translation', {
        titlePost: this.data['acf']['title_english'],
        contentPost: this.data['acf']['content_english'],
      }, true, true);
      this.i18NextService.addResourceBundle('vn', 'translation', {
        titlePost: this.data['title']['rendered'],
        contentPost: this.data['content']['rendered'],
      }, true, true);      
    });
  }

}
