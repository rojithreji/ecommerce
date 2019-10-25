import { ExoticService } from './exotic.service';
import { VegetablesService } from './vegetables.service';
import { RouterModule } from '@angular/router';
import { NewArrivalsService } from './newarrivals.service';
import { MobileappService } from './mobileapp.service';
import { FeaturesService } from './features.service';
import { OffersService } from './offers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselService } from './carousel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OffersComponent } from './offers/offers.component';
import { FeaturesComponent } from './features/features.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NewArrivalsComponent } from './newarrivals/newarrivals.component';
import { CollageComponent } from './collage/collage.component';
import { CollageService } from './collage.service';
import { FooterComponent } from './footer/footer.component';
import { FooterService } from './footer.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { FiltersComponent } from './filters/filters.component';
import { OrganicfruitsComponent } from './organicfruits/organicfruits.component';
import { OrganicFruitsPageComponent } from './organic-fruits-page/organic-fruits-page.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { VegetablesPageComponent } from './vegetables-page/vegetables-page.component';
import { ExoticComponent } from './exotic/exotic.component';
import { ExoticPageComponent } from './exotic-page/exotic-page.component';
import { SpicesComponent } from './spices/spices.component';
import { SpicesPageComponent } from './spices-page/spices-page.component';
import { SingleComponent } from './single/single.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    HomepagebodyComponent,
    CarouselComponent,
    OffersComponent,
    FeaturesComponent,
    MobileappComponent,
    ProductlistComponent,
    NewArrivalsComponent,
    CollageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CategorypageComponent,
    FiltersComponent,
    OrganicfruitsComponent,
    OrganicFruitsPageComponent,
    VegetablesComponent,
    VegetablesPageComponent,
    ExoticComponent,
    ExoticPageComponent,
    SpicesComponent,
    SpicesPageComponent,
    SingleComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'',
        component:HomepagebodyComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'organic-fruits',
        component:OrganicFruitsPageComponent
      },
      {
        path:'vegetables',
        component:VegetablesPageComponent
      },
      {
        path:'exotic',
        component:ExoticPageComponent
      },
      {
        path:'groceries',
        component:OrganicFruitsPageComponent
      },
      {
        path:'spices',
        component:SpicesPageComponent
      },
      {
        path:'seeds-oats',
        component:VegetablesPageComponent
      },
      {
        path:'single',
        component:SingleComponent
      },
      {
        path:'**',
        component:SingleComponent
      },
      {
        path:'cart',
        component:CartComponent
      },

    ])
  ],
  providers: [
              NavbarService,
              CategoryService,
              CarouselService,
              OffersService,
              FeaturesService,
              MobileappService,
              NewArrivalsService,
              CollageService,
              FooterService,
              VegetablesService,
              ExoticService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
