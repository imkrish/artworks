import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'artworks',
    loadChildren: () =>
      import('./artwork/artwork.module').then((m) => m.ArtworkModule),
  },
  { path: '**', redirectTo: '/artworks' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
