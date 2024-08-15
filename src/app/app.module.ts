import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';  // Import HomePage if not already

@NgModule({
  declarations: [AppComponent, HomePage],  // Declare HomePage here
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],  // Add FormsModule to imports
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}