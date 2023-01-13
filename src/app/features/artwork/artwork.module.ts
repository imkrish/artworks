import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ArtworkRoutingModule } from './artwork.routing.module'
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component'
import { ArtworkService } from './services/artwork.service'
import { ArtworkEffects } from './store/artwork.effects'
import { artworkReducer } from './store/artwork.reducer'

export const ARTWORK_FEATURE_NAME = 'artwork'

@NgModule({
  declarations: [ArtworkListComponent],
  providers: [ArtworkService],
  imports: [
    CommonModule,
    ArtworkRoutingModule,

    // store
    StoreModule.forFeature(ARTWORK_FEATURE_NAME, artworkReducer),
    EffectsModule.forFeature([ArtworkEffects]),
  ],
})
export class ArtworkModule {}
