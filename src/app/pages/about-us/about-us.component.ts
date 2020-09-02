import { Component, OnInit } from '@angular/core';
import { GetDataAboutUsService } from '../../services/get-data-about-us.service'
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  data:object;  

  constructor(
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {    
    this._getData.getDataPageById('12').subscribe((data: object) => {      
      this.data = {...data}      
      this.title.setTitle(this.data['title']['rendered']  + ' | FPS School - Hà Nội'); 
    })
  }

}
