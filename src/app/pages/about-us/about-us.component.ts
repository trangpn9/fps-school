import { Component, OnInit } from '@angular/core';
import { GetDataAboutUsService } from '../../services/get-data-about-us.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  data:any = '';
  content:any = '';

  constructor(private _getData: GetDataAboutUsService) { }

  ngOnInit() {    
  }

}
