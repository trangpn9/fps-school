import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { I18N_PROVIDERS } from './i18next.config';
import { I18NextModule } from 'angular-i18next';
import { YouTubePlayerModule } from '@angular/youtube-player';

import {RenderHtmlPipe} from './pipes/render-html.pipe';
import {SafePipe} from './pipes/safe.pipe';

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
import { WhyFpsComponent } from './pages/why-fps/why-fps.component'

import { FaqComponent } from './pages/faq/faq.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DetailPostComponent } from './posts/detail-post/detail-post.component';
import { StudyProgramComponent } from './pages/study-program/study-program.component';
import { AboutFpsComponent } from './pages/about-fps/about-fps.component';
import { InfrastructureComponent } from './pages/infrastructure/infrastructure.component';
import { StaffComponent } from './pages/staff/staff.component';
import { OneDayOfFpsComponent } from './pages/one-day-of-fps/one-day-of-fps.component';
import { ListMenuComponent } from './pages/list-menu/list-menu.component';
import {KitchenStovesComponent} from './pages/kitchen-stoves/kitchen-stoves.component';

import { PreLoadingComponent } from './components/pre-loading/pre-loading.component';

const appRouters: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hone', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-fps', component:  AboutFpsComponent},
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'one-day-of-fps', component: OneDayOfFpsComponent },
  { path: 'list-menu', component: ListMenuComponent },
  { path: 'curriculum', component: ServicesUsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'why-fps', component: WhyFpsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'study-program', component: StudyProgramComponent},
  { path: 'bep-an-che-do-dinh-duong', component: KitchenStovesComponent},
  { path: 'post/:slug', component: DetailPostComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    SafePipe,
    RenderHtmlPipe,
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
    PreLoadingComponent,
    WhyFpsComponent,
    FaqComponent,
    PricingComponent,
    DetailPostComponent,
    StudyProgramComponent,      
    AboutFpsComponent,
    InfrastructureComponent,
    StaffComponent,
    OneDayOfFpsComponent,
    ListMenuComponent,
    KitchenStovesComponent,
  ],  
  imports: [
    CommonModule,
    FontAwesomeModule,    
    RouterModule.forRoot(appRouters, { enableTracing: false, initialNavigation: 'enabled', relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    ),
    CarouselModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    I18NextModule.forRoot(),
  ],
  providers: [
    I18N_PROVIDERS
  ],

  exports: [
    CommonModule,
    RouterModule,
    RenderHtmlPipe,
    PreLoadingComponent    
  ]
})
export class AppRoutingModule { }
