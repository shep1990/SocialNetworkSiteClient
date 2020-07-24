import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { ProfileService } from '../../services/profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  )
  { }

  ngOnInit() {
    this.authService.completeAuthentication();

    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }
}