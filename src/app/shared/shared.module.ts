import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from './../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    ProgressBarComponent
  ]
})
export class SharedModule { }
