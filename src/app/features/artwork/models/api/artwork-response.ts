export interface ArtworkResponse {
  data: ArtworkItemResponse[]
  pagination: ArtworkPaginationResponse
}

export interface ArtworkItemResponse {
  title: string
  artist_title: string
  place_of_origin: string
  date_start: number
  date_end: number
}

interface ArtworkPaginationResponse {
  total_pages: number
}
