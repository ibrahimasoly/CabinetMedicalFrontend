import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenComponent } from './components/authen/authen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AuthenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    AuthenComponent,
  ]
})
export class LoginModule { }
