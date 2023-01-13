import { createAction, props } from '@ngrx/store'

import { ArtworkResponse } from '../models/api/artwork-response'

export const loadArtworks = createAction(
  '[Artworks] Load',
  props<{ page: number }>(),
)

export const artworksLoaded = createAction(
  '[Artworks] Loaded',
  props<{ response: ArtworkResponse }>(),
)

export const artworksLoadFailed = createAction(
  '[Artworks] Loaded Failed',
  props<{ message: string }>(),
)
