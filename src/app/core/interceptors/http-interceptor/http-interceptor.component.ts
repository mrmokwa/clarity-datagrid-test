import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

const TOKEN =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhZG1pbmlzdHJhZG9yIiwiZW1haWwiOiJhZG1pbmlzdHJhZG9yQHRkcy5jb20uYnIiLCJQZXNzb2FJZCI6IjAiLCJUaXBvVXN1YXJpbyI6IkEiLCJFbXByZXNhSWQiOiIxMSIsIlVybEJhc2UiOiJodHRwOi8vdGRzc2VydmVyODo4MDgwL3BhaW5lbC1kZS12ZW5kYXMvcmVzdC9wYWluZWwtZGUtdmVuZGFzLXNlcnZpY2UiLCJuYmYiOjE2MjAyNDAwMjYsImV4cCI6MTcyMDg0NDgyNiwiaWF0IjoxNjIwMjQwMDI2fQ.9RVWjB-AGmJLJ7DDkbBgE-qTNsyTK-h0yDa2fUpJMFFUF-q9fQnQIrRY9uJn6xybpGh9lTeO_AlWau3TlcDcFg';
const BASE_URL = 'http://localhost:8080/painel-vendas/rest';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css'],
})
export class HttpInterceptorComponent implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.startsWith('/api/')) {
      return next.handle(
        req.clone({
          setHeaders: { Authorization: `Bearer ${TOKEN}` },
          url: BASE_URL + req.url,
        })
      );
    }

    return next.handle(req);
  }
}
