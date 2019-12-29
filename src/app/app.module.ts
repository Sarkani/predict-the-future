import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainLeftComponent } from './main/main-left/main-left.component';
import { MainRightComponent } from './main/main-right/main-right.component';
import { RightContainerComponent } from './main/main-right/right-container/right-container.component';
import { LeftContainerComponent } from './main/main-left/left-container/left-container.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainLeftComponent,
    MainRightComponent,
    RightContainerComponent,
    LeftContainerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
