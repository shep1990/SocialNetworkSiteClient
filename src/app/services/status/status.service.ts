import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { Status } from '../../shared/status';

@Injectable()
export class StatusService implements OnInit{
  private accessPointUrl: string = environment.statusApi;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  )
  {
  }

  ngOnInit() {
  }

  public post(status: Status): Observable<Status> {
    let statusModel = {
      "status": status.status,
    }

    let headers = new HttpHeaders({
      'Authorization': this.authService.getAuthorizationHeaderValue()
    });
    return this.http.post<Status>(this.accessPointUrl + 'api/status/createStatus/' + this.authService.getClaims()['sub'], statusModel, { headers: headers });
  }
}