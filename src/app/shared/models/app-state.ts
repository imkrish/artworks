import { ARTWORK_FEATURE_NAME } from '../../features/artwork/artwork.module'
import { ArtworkState } from '../../features/artwork/store/artwork.reducer'

export interface AppState {
  [ARTWORK_FEATURE_NAME]: ArtworkState
}
