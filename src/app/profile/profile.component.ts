import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ErrorHandlerService } from '../services/error-handling/error-handler.service';
import { AuthService } from '../services/authentication/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  stringData: {};
  public errorMessage: string = '';

  constructor(
    private profileService: ProfileService,
    private errorHandler: ErrorHandlerService
  )
  {

  }

  name = new FormControl('');
  email = new FormControl('')

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.get().subscribe((data: {}) => {
      this.stringData = data;
      console.log(this.stringData);
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
}
