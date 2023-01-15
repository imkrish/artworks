import { createReducer, on } from '@ngrx/store'

import { Status } from '../../../shared/models/status'
import { ArtworkItemResponse } from '../models/api/artwork-response'
import {
  artworksLoadFailed,
  artworksLoaded,
  loadArtworks,
} from './artwork.actions'

export interface ArtworkState {
  artworks: ArtworkItemResponse[]
  totalPages: number
  loadingStatus: Status
}

const initialState: ArtworkState = {
  artworks: [],
  totalPages: 0,
  loadingStatus: Status.Idle,
}

export const artworkReducer = createReducer(
  initialState,
  on(loadArtworks, (state) => {
    return { ...state, loadingStatus: Status.Pending }
  }),
  on(artworksLoaded, (state, { response }) => {
    return {
      ...state,
      artworks: response.data,
      totalPages: response.pagination.total_pages,
      loadingStatus: Status.Success,
    }
  }),
  on(artworksLoadFailed, (state, { message }) => {
    return { ...state, loadingStatus: Status.Rejected }
  }),
)
