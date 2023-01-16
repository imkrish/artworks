import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NxCardModule } from '@aposin/ng-aquila/card'
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown'
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield'
import { NxPaginationModule } from '@aposin/ng-aquila/pagination'
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ArtworkRoutingModule } from './artwork.routing.module'
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component'
import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component'
import { ArtworkService } from './services/artwork.service'
import { ArtworkEffects } from './store/artwork.effects'
import { artworkReducer } from './store/artwork.reducer'

export const ARTWORK_FEATURE_NAME = 'artwork'

@NgModule({
  declarations: [ArtworkPageComponent, ArtworkListComponent],
  providers: [ArtworkService],
  imports: [
    CommonModule,
    ArtworkRoutingModule,

    // store
    StoreModule.forFeature(ARTWORK_FEATURE_NAME, artworkReducer),
    EffectsModule.forFeature([ArtworkEffects]),

    // NX
    NxSpinnerModule,
    NxCardModule,
    NxPaginationModule,
    NxDropdownModule,
    NxFormfieldModule,
    FormsModule,
  ],
})
export class ArtworkModule {}
