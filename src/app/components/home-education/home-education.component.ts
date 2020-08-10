import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-education',
  templateUrl: './home-education.component.html',
  styleUrls: ['./home-education.component.scss']
})
export class HomeEducationComponent implements OnInit {  
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

}
