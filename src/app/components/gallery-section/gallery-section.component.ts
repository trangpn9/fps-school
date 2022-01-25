import { Component, OnInit, Inject } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { GetDataPostService } from './../../services/get-data-post.service';
import { Title, Meta } from '@angular/platform-browser';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  data: any;

  constructor(
    private _getDataPostService: GetDataPostService,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._getDataPostService.getListPostByIdCategory('10', '5').subscribe((data: any) => {
      this.data = data;
    });
  }

}
