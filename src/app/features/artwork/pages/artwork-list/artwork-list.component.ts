import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../../shared/models/app-state'
import { Status } from '../../../../shared/models/status'
import { Artwork } from '../../models/artwork'
import { LabelValue } from '../../models/label-value'
import { StyleTitleOption } from '../../models/style-title-option'
import { DEFAULT_IMAGE_URL } from '../../services/artwork.service'
import { loadArtworks } from '../../store/artwork.actions'
import { ArtworkSelectors } from '../../store/artwork.selectors'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkListComponent {
  SORT_ITEMS: LabelValue[] = [
    { value: 'title', label: 'Name' },
    { value: 'artists', label: 'Artist' },
    { value: 'dateStart', label: 'Date' },
  ]
  Status = Status

  artworks$: Observable<Artwork[]>
  total$: Observable<number>
  limit$: Observable<number>
  loadingStatus$: Observable<Status>
  styleTitlesOptions$: Observable<StyleTitleOption[]>

  // state
  currentPage: number
  selectedFilters: string[]
  sortBy: LabelValue

  constructor(private store: Store<AppState>) {
    this.artworks$ = this.store.select(ArtworkSelectors.artworks)
    this.total$ = this.store.select(ArtworkSelectors.total)
    this.limit$ = this.store.select(ArtworkSelectors.limit)
    this.loadingStatus$ = this.store.select(ArtworkSelectors.loadingStatus)
    this.styleTitlesOptions$ = this.store.select(
      ArtworkSelectors.styleTitlesOptions,
    )

    // state
    this.currentPage = 1
    this.selectedFilters = []
    this.sortBy = this.SORT_ITEMS[0]
  }

  ngOnInit() {
    this.store.dispatch(loadArtworks({ page: 0 }))
  }

  filterAndSort(
    artworks: Artwork[],
    selectedFilters: string[],
    { value }: LabelValue,
  ) {
    return artworks
      .filter((artwork) => {
        if (selectedFilters.length === 0) {
          return true
        }

        return selectedFilters.some((value) =>
          artwork.styleTitles.includes(value),
        )
      })
      .sort((item1, item2) => {
        // @ts-ignore
        const [item1Value, item2Value] = [item1[value], item2[value]]

        if (item1Value > item2Value) {
          return 1
        }
        if (item1Value < item2Value) {
          return -1
        }

        return 0
      })
  }

  setImagePlaceholder(artwork: Artwork) {
    // mutation
    artwork.imgUrl = DEFAULT_IMAGE_URL
  }

  toLabel(item: any) {
    return item.label
  }

  goToPage(page: number) {
    this.loadPage(page)
  }

  prevPage() {
    const newPage = this.currentPage - 1
    this.loadPage(newPage)
  }

  nextPage() {
    const newPage = this.currentPage + 1
    this.loadPage(newPage)
  }

  private loadPage(page: number) {
    this.currentPage = page
    this.store.dispatch(loadArtworks({ page }))
    // reset selected filters
    this.selectedFilters = []
  }
}
