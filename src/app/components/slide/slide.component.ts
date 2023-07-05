import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],  
})
export class SlideComponent implements OnInit {
  muteVal = 0;
  srcVal = `https://www.youtube.com/embed/3yzrR0PiyhE?vq=hd1080&autoplay=1&mute=${this.muteVal}&loop=1&autopause=0&rel=0&controls=0`

  constructor() { }

  ngOnInit() {
    const idIframe = document.getElementById('idIframe');
    console.log(idIframe);
    
  }
}
