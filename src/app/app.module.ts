import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrapService } from './scrap.service';
import{HttpClientModule} from '@angular/common/http';
import { WebScrapComponent } from './web-scrap/web-scrap.component';

@NgModule({
  declarations: [
    AppComponent,
    WebScrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ScrapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
