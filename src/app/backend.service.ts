import { Injectable } from '@angular/core';
import { Card } from './overview/overview.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Card[]> {
    return this.http.get<Card[]>(
      'https://angular-workshop.dev.digisus-lab.ch/'
    );
  }
}
