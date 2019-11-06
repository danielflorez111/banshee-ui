import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from './../../core/material/material.module';
import { CoreModule } from './../../core/core.module';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { VisitFormComponent } from './components/visit-form/visit-form.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientFormComponent,
    VisitFormComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ]
})
export class ClientModule { }
