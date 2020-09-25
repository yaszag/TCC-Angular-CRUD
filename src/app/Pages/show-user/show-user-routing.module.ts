import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowUserComponent } from './show-user.component';

const routes: Routes = [{ path: '', component: ShowUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowUserRoutingModule { }
