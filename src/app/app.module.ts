import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from '../common/header/header.component';
import {RentalComponent} from './rental/rental.component';
import {RentalModule} from './rental/rental.module';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: RentalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
