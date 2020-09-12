import { Component, OnInit, Inject } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  language: string = 'vn';
  languages: string[] = ['vn', 'en'];

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) { }

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
    // this.i18NextService.addResourceBundle('en', 'translation', {
    //   addEn: 'value',
    // }, true, true);
    // this.i18NextService.addResourceBundle('vn', 'translation', {
    //   addEn: 'vn-value',
    // }, true, true);
  }

  changeLanguage(lang: string) {    
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then(x => {
        this.updateState(lang);
        document.location.reload();        
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }

}
