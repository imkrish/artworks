import { createSelector } from '@ngrx/store'

import { AppState } from '../../../shared/models/app-state'
import { ARTWORK_FEATURE_NAME } from '../artwork.module'

const selectFeature = (state: AppState) => state[ARTWORK_FEATURE_NAME]

export class ArtworkSelectors {
  static artworks = createSelector(selectFeature, (state) => state.artworks)
  static loadingStatus = createSelector(selectFeature, (state) => state.loadingStatus)
  static totalPages = createSelector(selectFeature, (state) => state.totalPages)
}
