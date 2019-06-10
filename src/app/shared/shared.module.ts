import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule, MatListModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const modules = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class SharedModule { }
