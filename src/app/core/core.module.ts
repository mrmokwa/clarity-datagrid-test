import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorComponent } from './interceptors/http-interceptor/http-interceptor.component';

const CUSTOM_INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorComponent,
    multi: true,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CUSTOM_INTERCEPTORS],
})
export class CoreModule {}
