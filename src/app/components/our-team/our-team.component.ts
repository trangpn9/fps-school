import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faGooglePlusG, faPinterestP } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG;
  faPinterestP = faPinterestP;
  
  constructor() { }

  ngOnInit() {
  }

}
