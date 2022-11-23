import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [TableLightComponent],
  imports: [CommonModule],
  exports: [TableLightComponent, TemplatesModule, IconsModule],
})
export class SharedModule {}
