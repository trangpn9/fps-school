import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],  
})
export class SlideComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const idIframe = document.getElementById('idIframe');
    console.log(idIframe);
    
  }
}
