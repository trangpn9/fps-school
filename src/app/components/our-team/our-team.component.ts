import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faGooglePlusG, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { GetDataPostService } from './../../services/get-data-post.service';

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
  data: any;
  
  constructor(private _getDataPostService: GetDataPostService) { }

  ngOnInit() {
    this._getDataPostService.getListPostByIdCategory('6').subscribe((data: any) => {
      this.data = data;
    });
  }

}
