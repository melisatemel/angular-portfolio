import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { WorkListComponent } from './components/work-list/work-list.component';



@NgModule({
  declarations: [ProgressBarComponent, WorkListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressBarComponent, WorkListComponent]
})
export class SharedModule { }
