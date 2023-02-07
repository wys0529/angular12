import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty-component/empty-component.component';
const routes: Routes = [
  {
    path: 'angular',
    component: EmptyComponent,
  },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
