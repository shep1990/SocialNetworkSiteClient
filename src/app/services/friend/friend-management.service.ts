import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { Friend } from '../../shared/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendManagementService implements OnInit{
  private accessPointUrl: string = environment.friendsApi;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  )
  {
  }

  ngOnInit() {
  }

  public addFriendRequest(userId: string): Observable<Friend>{

    var friendModel = {
      "RequestUserId": this.authService.getClaims()['sub'],
      "TargetUserId": userId
    }

    return this.http.post<Friend>(this.accessPointUrl + 'api/friends/createRequest/', friendModel);
  }
}
