import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SlideComponent } from './components/slide/slide.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ServicesUsComponent } from './pages/services-us/services-us.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeEducationComponent } from './components/home-education/home-education.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FactCounterComponent } from './components/fact-counter/fact-counter.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { EventSectionComponent } from './components/event-section/event-section.component';
import { TestimonialFaqComponent } from './components/testimonial-faq/testimonial-faq.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';


const appRouters: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hone', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesUsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SlideComponent,
    AboutUsComponent,
    ServicesUsComponent,
    NewsComponent,
    ContactComponent,
    RecruitmentComponent,
    ShortAboutComponent,    
    HomeServicesComponent,
    HomeEducationComponent,
    FactCounterComponent,
    OurTeamComponent,
    EventSectionComponent,
    TestimonialFaqComponent,
    CtaSectionComponent,
    GallerySectionComponent,    
  ],  
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRouters, { enableTracing: false, initialNavigation: 'enabled' } // <-- debugging purposes only
),
    CarouselModule,
    BrowserAnimationsModule,
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
