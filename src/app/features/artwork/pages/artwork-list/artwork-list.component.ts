import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../../shared/models/app-state'
import { Status } from '../../../../shared/models/status'
import { ArtworkItemResponse } from '../../models/api/artwork-response'
import { loadArtworks } from '../../store/artwork.actions'
import { ArtworkSelectors } from '../../store/artwork.selectors'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkListComponent {
  artworkItems$: Observable<ArtworkItemResponse[]>
  loadingStatus$: Observable<Status>
  totalPages$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.artworkItems$ = this.store.select(ArtworkSelectors.artworks)
    this.loadingStatus$ = this.store.select(ArtworkSelectors.loadingStatus)
    this.totalPages$ = this.store.select(ArtworkSelectors.totalPages)
  }

  ngOnInit() {
    this.store.dispatch(loadArtworks({ page: 0 }))
  }
}
