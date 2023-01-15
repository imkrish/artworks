export interface ArtworkResponse {
  config: ArtworkConfigResponse
  data: ArtworkItemResponse[]
  pagination: ArtworkPaginationResponse
}

interface ArtworkConfigResponse {
  iiif_url: string
}

export interface ArtworkItemResponse {
  image_id: string
  title: string
  artist_titles: string[]
  material_titles: string[]
  place_of_origin: string
  date_start: number
  date_end: number
}

interface ArtworkPaginationResponse {
  total: number
  limit: number
}
