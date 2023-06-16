import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {

  faBus = faBus;
  
  constructor() { }

  ngOnInit() {
  }

}
