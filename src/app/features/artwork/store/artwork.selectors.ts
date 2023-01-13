import { createSelector } from '@ngrx/store'

import { AppState } from '../../../models/app-state'
import { ARTWORK_FEATURE_NAME } from '../artwork.module'

const selectFeature = (state: AppState) => state[ARTWORK_FEATURE_NAME]

export const artworkItems = createSelector(
  selectFeature,
  (state) => state.artworks,
)
