import { createReducer, on } from '@ngrx/store'

import { Status } from '../../../shared/models/status'
import { ArtworkItemResponse } from '../models/api/artwork-response'
import {
  artworksLoadFailed,
  artworksLoaded,
  loadArtworks,
} from './artwork.actions'

export interface ArtworkState {
  imgBaseUrl: string
  artworks: ArtworkItemResponse[]
  totalPages: number
  loadingStatus: Status
}

const initialState: ArtworkState = {
  imgBaseUrl: '',
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
    const { config, data, pagination } = response

    return {
      ...state,
      imgBaseUrl: config.iiif_url,
      artworks: data,
      totalPages: pagination.total_pages,
      loadingStatus: Status.Success,
    }
  }),
  on(artworksLoadFailed, (state, { message }) => {
    return { ...state, loadingStatus: Status.Rejected }
  }),
)
