import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../../models/app-state'
import { ArtworkItemResponse } from '../../models/api/artwork-response'
import { loadArtworks } from '../../store/artwork.actions'
import { artworkItems } from '../../store/artwork.selectors'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css'],
})
export class ArtworkListComponent {
  artworkItems$: Observable<ArtworkItemResponse[]>

  constructor(private store: Store<AppState>) {
    this.artworkItems$ = this.store.select(artworkItems)
  }

  ngOnInit() {
    this.store.dispatch(loadArtworks({ page: 0 }))
  }
}
