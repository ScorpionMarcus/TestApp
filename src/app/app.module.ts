import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlayersComponent } from './slayers/slayers.component';
import { SoundButtonComponent } from './sound-button/sound-button.component';
import { SlayerDetailComponent } from './slayer-detail/slayer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SlayersComponent,
    SoundButtonComponent,
    SlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
