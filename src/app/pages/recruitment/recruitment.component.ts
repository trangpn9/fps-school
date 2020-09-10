import { Component, OnInit } from '@angular/core';
import { GetDataAboutUsService } from 'src/app/services/get-data-about-us.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  data:object;

  constructor(
    private _getData: GetDataAboutUsService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._getData.getDataPageById('14').subscribe((data: object) => {      
      this.data = {...data}      
      this.title.setTitle(this.data['title']['rendered']  + ' | FPS School - Hà Nội'); 
    })
  }

}
