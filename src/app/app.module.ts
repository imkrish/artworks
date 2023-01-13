import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NxButtonModule } from '@aposin/ng-aquila/button'
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox'
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons'
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown'
import { NxFooterModule } from '@aposin/ng-aquila/footer'
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield'
import { NxGridModule } from '@aposin/ng-aquila/grid'
import { NxHeadlineModule } from '@aposin/ng-aquila/headline'
import { NxIconModule } from '@aposin/ng-aquila/icon'
import { NxInputModule } from '@aposin/ng-aquila/input'
import { NxLinkModule } from '@aposin/ng-aquila/link'
import { NxMessageModule } from '@aposin/ng-aquila/message'
import { NxModalModule } from '@aposin/ng-aquila/modal'
import { NxOverlayModule } from '@aposin/ng-aquila/overlay'
import { NxPopoverModule } from '@aposin/ng-aquila/popover'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ArtworkModule } from './artwork/artwork.module'

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

    // NX
    NxButtonModule,
    NxCheckboxModule,
    NxDocumentationIconModule,
    NxDropdownModule,
    NxFooterModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeadlineModule,
    NxIconModule,
    NxInputModule,
    NxLinkModule,
    NxMessageModule,
    NxModalModule,
    NxOverlayModule,
    NxPopoverModule,

    // Store
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    // App
    AppRoutingModule,
    ArtworkModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/** Copyright Allianz 2023 */
