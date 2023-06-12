import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInforComponent } from './my-infor/my-infor.component';
import { MyInfoTwoComponent } from './my-info-two/my-info-two.component';
import { MyInfoThreeComponent } from './my-info-three/my-info-three.component';
import { MyInfoFourComponent } from './my-info-four/my-info-four.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInforComponent,
    MyInfoTwoComponent,
    MyInfoThreeComponent,
    MyInfoFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
