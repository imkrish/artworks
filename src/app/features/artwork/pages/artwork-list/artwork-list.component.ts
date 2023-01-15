import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../../shared/models/app-state'
import { Status } from '../../../../shared/models/status'
import { ArtworkItemResponse } from '../../models/api/artwork-response'
import { Artwork } from '../../models/artwork'
import { loadArtworks } from '../../store/artwork.actions'
import { ArtworkSelectors } from '../../store/artwork.selectors'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkListComponent {
  Status = Status

  artworks$: Observable<Artwork[]>
  totalPages$: Observable<number>
  loadingStatus$: Observable<Status>

  constructor(private store: Store<AppState>) {
    this.artworks$ = this.store.select(ArtworkSelectors.artworks)
    this.totalPages$ = this.store.select(ArtworkSelectors.totalPages)
    this.loadingStatus$ = this.store.select(ArtworkSelectors.loadingStatus)
  }

  ngOnInit() {
    this.store.dispatch(loadArtworks({ page: 0 }))
  }

  setImagePlaceholder(artwork: Artwork) {
    // mutation
    artwork.imgUrl =
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg'
  }
}
