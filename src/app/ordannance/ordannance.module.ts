import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JouterOrdonnanceComponent } from './components/jouter-ordonnance/jouter-ordonnance.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    JouterOrdonnanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    JouterOrdonnanceComponent
  ]
})
export class OrdannanceModule { }
