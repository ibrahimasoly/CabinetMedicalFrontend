import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterBilanComponent } from './components/ajouter-bilan/ajouter-bilan.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AjouterBilanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class BilanModule { }
