import { InternsDataService } from './interns/interns-data.service';
import { InternPageGuardService } from './interns/internpageguard.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InternsComponent } from './interns/interns.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InternProfileComponent } from './internprofile/internprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    InternsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InternProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'interns', component: InternsComponent},
      {path: 'intern/:name', canActivate: [InternPageGuardService], component: InternProfileComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [InternPageGuardService, InternsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
