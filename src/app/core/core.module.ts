import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';

const CUSTOM_INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CUSTOM_INTERCEPTORS],
})
export class CoreModule { }
