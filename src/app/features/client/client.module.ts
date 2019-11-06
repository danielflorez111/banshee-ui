import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from './../../core/material/material.module';
import { CoreModule } from './../../core/core.module';

import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [
    ClientListComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class ClientModule { }
