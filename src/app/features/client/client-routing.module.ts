import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { VisitFormComponent } from './components/visit-form/visit-form.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'form', component: ClientFormComponent },
  { path: 'form/:id', component: ClientFormComponent },
  { path: 'visit/:id', component: VisitFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
