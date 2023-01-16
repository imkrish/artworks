import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component'

const routes: Routes = [
  {
    path: '',
    component: ArtworkPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtworkRoutingModule {}
