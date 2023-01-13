import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ArtworkResponse } from '../models/api/artwork-response'

const BASE_URL = 'https://api.artic.edu/api/v1/artworks'
const LIMIT_PER_PAGE = 8

@Injectable()
export class ArtworkService {
  constructor(private http: HttpClient) {}

  getArtWorks(page: number) {
    const path = `${BASE_URL}?limit=${LIMIT_PER_PAGE}&page=${page}`
    return this.http.get<ArtworkResponse>(path)
  }
}
