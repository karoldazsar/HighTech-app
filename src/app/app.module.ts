import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { GoalsComponent } from './components/goals/goals.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component'
import { SavingsComponent } from './components/savings/savings.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    InvestmentComponent,
    GoalsComponent,
    BriefcaseComponent,
    SavingsComponent,
    MenuComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
