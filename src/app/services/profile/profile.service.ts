import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../../shared/value'
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class ProfileService implements OnInit{
  private accessPointUrl: string = 'https://profileApi.gts.com/api/profile/getprofile/';
  response: Object;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  )
  {
  }

  ngOnInit() {
  }



  public get(): Observable<Value> {
    let headers = new HttpHeaders({
      'Authorization': this.authService.getAuthorizationHeaderValue()
    });
    return this.http.get<Value>(this.accessPointUrl + this.authService.getClaims()['sub'], { headers: headers });
  }
}
