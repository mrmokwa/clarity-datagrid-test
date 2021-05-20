import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';



@NgModule({
  declarations: [HttpInterceptorComponent],
  imports: [
    CommonModule
  ]
})
export class InterceptorsModule { }
