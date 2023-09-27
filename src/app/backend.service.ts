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

  patchData(id: number, updatedAttributes: any): Observable<Card[]> {
    return this.http.patch<Card[]>(
      `https://angular-workshop.dev.digisus-lab.ch/${id}`,
      updatedAttributes
    );
  }

  storeData(newPost: Card) {
    return this.http.post<Card>(
      'https://angular-workshop.dev.digisus-lab.ch/',
      newPost
    );
  }
}
