import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ArtworkRoutingModule } from './artwork.routing.module'
import { ArtworkListComponent } from './pages/artwork-list/artwork-list.component'

@NgModule({
  declarations: [ArtworkListComponent],
  providers: [],
  imports: [CommonModule, ArtworkRoutingModule],
})
export class ArtworkModule {}
