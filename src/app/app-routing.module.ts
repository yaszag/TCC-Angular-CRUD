import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'show-user', pathMatch: 'full' },
  { path: 'edit-user', loadChildren: () => import('./pages/edit-user/edit-user.module').then(m => m.EditUserModule) },
  { path: 'add-user', loadChildren: () => import('./pages/add-user/add-user.module').then(m => m.AddUserModule) },
  { path: 'show-user', loadChildren: () => import('./pages/show-user/show-user.module').then(m => m.ShowUserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }