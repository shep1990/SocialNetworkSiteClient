import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { Profile } from '../../shared/profile';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileService implements OnInit{
  private accessPointUrl: string = environment.profileApi;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  )
  {
  }

  ngOnInit() {
  }


  public get(): Observable<Profile> {
    return this.http.get<Profile>(this.accessPointUrl + 'api/profile/getprofile/' + this.authService.getClaims()['sub']);
  }

  public getUserProfile(userId: string): Observable<Profile> {
    return this.http.get<Profile>(this.accessPointUrl + 'api/profile/getprofile/' + userId);
  }


  public put(profile: Profile): Observable<Profile> {

    let SignUpModel = {
      "name": profile.name,
      "email": profile.email,
      "age": profile.age,
      "dateOfBirth": profile.dateOfBirth
    }

    return this.http.post<Profile>(this.accessPointUrl + 'api/profile/UpdateProfile/' + this.authService.getClaims()['sub'], SignUpModel);
  }
}
