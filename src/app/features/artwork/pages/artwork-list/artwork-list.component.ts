import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../../shared/models/app-state'
import { Status } from '../../../../shared/models/status'
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
  total$: Observable<number>
  limit$: Observable<number>
  loadingStatus$: Observable<Status>

  currentPage: number

  constructor(private store: Store<AppState>) {
    this.artworks$ = this.store.select(ArtworkSelectors.artworks)
    this.total$ = this.store.select(ArtworkSelectors.total)
    this.limit$ = this.store.select(ArtworkSelectors.limit)
    this.loadingStatus$ = this.store.select(ArtworkSelectors.loadingStatus)
    this.currentPage = 1
  }

  ngOnInit() {
    this.store.dispatch(loadArtworks({ page: 0 }))
  }

  setImagePlaceholder(artwork: Artwork) {
    // mutation
    artwork.imgUrl =
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg'
  }

  goToPage(page: number) {
    this.store.dispatch(loadArtworks({ page }))
    this.currentPage = page
  }

  prevPage() {
    const newPage = this.currentPage - 1
    this.currentPage = newPage
    this.store.dispatch(loadArtworks({ page: newPage }))
  }

  nextPage() {
    const newPage = this.currentPage + 1
    this.currentPage = newPage
    this.store.dispatch(loadArtworks({ page: newPage }))
  }
}
