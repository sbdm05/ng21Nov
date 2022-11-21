import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    UiModule,
    IconsModule,
    TemplatesModule,
    LoginModule,
  ],
})
export class CoreModule {}
