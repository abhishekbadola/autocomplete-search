import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Security } from '../model/security';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  private securityData = new BehaviorSubject<any>([]);
  securitiesObservable = this.securityData.asObservable();

  private filteredSecurities = new BehaviorSubject<any>([]);
  filteredSecuritiesObservable = this.filteredSecurities.asObservable();

  private searchedSecurity = new BehaviorSubject<Security>(new Security());
  searchedSecurityObservable = this.searchedSecurity.asObservable();

  private securityEndpoint = './assets/security.json';

  getSecurityJSON(): Observable<Security[]> {
    return this.http.get<Security[]>(this.securityEndpoint)
      .map((res) => {
        this.securityData.next(res);
        return res;
      });
  }

  getFilteredSecurities(query): Observable<Security[]> {
    return this.securitiesObservable.map((res) => res.filter((item: Security) => {
      return item.Description.toLowerCase().indexOf(query.toLowerCase()) > -1;
    }));
  }

  setResults(security: Security) {
    this.searchedSecurity.next(security);
  }
}
