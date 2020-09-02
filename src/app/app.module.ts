import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { I18NextModule } from 'angular-i18next';
import { I18N_PROVIDERS } from './i18next.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,    
  ],
  imports: [    
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    HttpClientModule,
    BrowserAnimationsModule,       
    FontAwesomeModule,
    AppRoutingModule,
    I18NextModule.forRoot(),
  ],
  providers: [
    I18N_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
