import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ArtworkService } from '../services/artwork.service'
import {
  artworksLoadFailed,
  artworksLoaded,
  loadArtworks,
} from './artwork.actions'

@Injectable()
export class ArtworkEffects {
  loadArtworks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadArtworks),
      switchMap(({ page }) => {
        return this.artworkService.getArtWorks(page).pipe(
          map((response) => artworksLoaded({ response })),
          catchError((message) => of(artworksLoadFailed({ message }))),
        )
      }),
    )
  })

  constructor(
    private actions$: Actions,
    private artworkService: ArtworkService,
  ) {}
}



