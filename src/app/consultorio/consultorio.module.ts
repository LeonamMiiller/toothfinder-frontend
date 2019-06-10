import {NgModule} from '@angular/core';
import {ConsultorioComponent} from './consultorio.component';
import {SharedModule} from '../shared/shared.module';
import {ConsultorioService} from './consultorio.service';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatCardModule
  ],
  declarations: [
    ConsultorioComponent,
  ],
  exports: [
    ConsultorioComponent,
  ],
  providers: [
    ConsultorioService,
  ]
})
export class ConsultorioModule {
}
