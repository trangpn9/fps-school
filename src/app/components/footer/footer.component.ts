import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../../constants/init-api';
import { faFacebookF, faTwitter, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;  


  data:any = '';
  content_short:any = '';

  constructor(private http:HttpClient) { }

  ngOnInit() {  
  }

  ngAfterViewInit() {
    const el = document.querySelector("#icon-1");    
    el.addEventListener("mousemove", (e) => {
      console.log('test: ', e);
      
      // el.style.setProperty('--x', -e.offsetX + "px");
      // el.style.setProperty('--y', -e.offsetY + "px");
    });
  }

}
