import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"


//All the components used in the website
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { PopularComponent } from './popular/popular.component';
import { PersonComponent } from './person/person.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StayComponent } from './stay/stay.component';
import { StayDetailComponent } from './stay/stay-detail/stay-detail.component';
import { StayFiltersComponent } from './stay/stay-filters/stay-filters.component';
import { StayListComponent } from './stay/stay-list/stay-list.component';
import { userService } from './register/user.service.';
import { StayService } from './stay/stay.service';
import { StayItemComponent } from './stay/stay-list/stay-item/stay-item.component';
import { StayRecommendComponent } from './stay/stay-detail/stay-recommend/stay-recommend.component';
import { StayRecommendItemComponent } from './stay/stay-detail/stay-recommend/stay-recommend-item/stay-recommend-item.component';
import { AttractionItemComponent } from './stay/stay-list/attraction-item/attraction-item.component';
import { AttractionItemDetailComponent } from './stay/stay-list/attraction-item/attraction-item-detail/attraction-item-detail.component';


//libraries for integrating firebase authentication to website
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from "@angular/flex-layout";

//used in styling the website
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

//contains the API keys and information 
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    PopularComponent,
    PersonComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    StayComponent,
    StayDetailComponent,
    StayFiltersComponent,
    StayListComponent,
    StayItemComponent,
    StayRecommendComponent,
    StayRecommendItemComponent,
    AttractionItemComponent,
    AttractionItemDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

  ],
  providers: [userService,StayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
