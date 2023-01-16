import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppStoreModule } from './app-store.module'
import { AppComponent } from './app.component'
import { ArtworkModule } from './features/artwork/artwork.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Store
    AppStoreModule,

    // App
    AppRoutingModule,
    ArtworkModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
