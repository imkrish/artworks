import { createReducer, on } from '@ngrx/store'

import { ArtworkItemResponse } from '../models/api/artwork-response'
import { artworksLoadFailed, artworksLoaded } from './artwork.actions'

export interface ArtworkState {
  artworks: ArtworkItemResponse[]
  totalPages: number
  errorMessage: string
}

const initialState: ArtworkState = {
  artworks: [],
  totalPages: 0,
  errorMessage: '',
}

export const artworkReducer = createReducer(
  initialState,
  on(artworksLoaded, (state, { response }) => {
    return {
      ...state,
      artworks: response.data,
      totalPages: response.pagination.total_pages,
    }
  }),
  on(artworksLoadFailed, (state, { message }) => {
    return { ...state, errorMessage: message }
  }),
)
