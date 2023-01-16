import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Artwork } from '../../models/artwork'
import { LabelValue } from '../../models/label-value'
import { DEFAULT_IMAGE_URL } from '../../services/artwork.service'

@Component({
  selector: 'app-artwork-list',
  template: `<div class="grid grid-cols-4 gap-8 w-full">
    <nx-card
      *ngFor="
        let artwork of filterAndSort(artworks || [], selectedFilters, sortBy)
      "
    >
      <div class="flex justify-center items-center max-h-96">
        <img
          [src]="artwork.imgUrl"
          [alt]="artwork.title"
          (error)="setImagePlaceholder(artwork)"
          class="w-auto max-h-56"
        />
      </div>

      <nx-card-header>
        <h3 nxHeadline="subsection-small" class="nx-margin-bottom-2m">
          {{ artwork.title }}
        </h3>
      </nx-card-header>
      <p nxHeadline="subsection-xsmall" class="nx-margin-bottom-m">
        {{ artwork.artists }}
      </p>
      <p nxCopytext="normal">
        {{ artwork.originAndYear }}
      </p>
      <p nxCopytext="normal">
        {{ artwork.materials }}
      </p>
    </nx-card>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkListComponent {
  @Input()
  artworks!: Artwork[]
  @Input()
  selectedFilters!: string[]
  @Input()
  sortBy!: LabelValue

  setImagePlaceholder(artwork: Artwork) {
    // mutation
    artwork.imgUrl = DEFAULT_IMAGE_URL
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
}
