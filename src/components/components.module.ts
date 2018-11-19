import { NgModule } from '@angular/core';
import { MachineComponent } from './machine/machine';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MachineComponent,
    MachineComponent],
	imports: [
    IonicModule,
    CommonModule
  ],
	exports: [MachineComponent,
    MachineComponent]
})
export class ComponentsModule {}
