import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private readonly API = `http://localhost:1919/flags`;

  constructor(private http: HttpClient) { }

  getDatas(): Observable<any> {
    return this.http.get(this.API);
  }

  listCountry(filter: string): Observable<any>{
    return this.http.get(`${this.API}?name=${filter}`);
  }

  listRegion(region: string): Observable<any>{
    if(region == ''){
      return this.http.get(this.API);
    }
    return this.http.get(`${this.API}?region=${region}`);
  }

  getCountry(country: string): Observable<any>{
    return this.http.get(`${this.API}?alpha3Code=${country}`);
  }
}
