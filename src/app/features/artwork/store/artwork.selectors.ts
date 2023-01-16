import { createSelector } from '@ngrx/store'

import { AppState } from '../../../shared/models/app-state'
import { ARTWORK_FEATURE_NAME } from '../artwork.module'

const selectFeature = (state: AppState) => state[ARTWORK_FEATURE_NAME]

const getOriginAndYear = (
  place_of_origin: string,
  date_start?: number,
  date_end?: number,
) => {
  if (!date_start && !date_end) {
    return place_of_origin
  }
  if (date_start === date_end) {
    return `${place_of_origin} (${date_start})`
  }

  return `${place_of_origin} (${date_start} - ${date_end})`
}

export class ArtworkSelectors {
  static artworks = createSelector(selectFeature, (state) => {
    const { artworks, imgBaseUrl } = state

    return artworks.map((artwork) => {
      const {
        title,
        artist_titles,
        place_of_origin,
        date_start,
        date_end,
        material_titles,
        style_titles,
      } = artwork
      return {
        title,
        artists: artist_titles.join(', '),
        materials: material_titles.join(', '),
        originAndYear: getOriginAndYear(place_of_origin, date_start, date_end),
        imgUrl: `${imgBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`,
        styleTitles: style_titles,
        dateStart: date_start
      }
    })
  })

  static styleTitlesOptions = createSelector(selectFeature, (state) => {
    const styleTitleCountDict = state.artworks.reduce((dict, artwork) => {
      artwork.style_titles.forEach((styleTitle) => {
        if (!dict[styleTitle]) {
          dict[styleTitle] = 0
        }
        dict[styleTitle] += 1
      })

      return dict
    }, {} as Record<string, number>)

    return Object.keys(styleTitleCountDict).map((styleTitle) => {
      const count = styleTitleCountDict[styleTitle]
      return { styleTitle, count, label: `${styleTitle} (${count})` }
    })
  })

  static loadingStatus = createSelector(
    selectFeature,
    (state) => state.loadingStatus,
  )

  static total = createSelector(selectFeature, (state) => state.total)
  static limit = createSelector(selectFeature, (state) => state.limit)
}
