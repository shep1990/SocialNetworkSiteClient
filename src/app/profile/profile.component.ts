import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ErrorHandlerService } from '../services/error-handling/error-handler.service';
import { AuthService } from '../services/authentication/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  stringData: {};
  public errorMessage: string = '';


  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', Validators.required);
  dateOfBirth = new FormControl('', Validators.required);



  constructor(
    private profileService: ProfileService,
    private errorHandler: ErrorHandlerService
  )
  {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.get().subscribe((data: {}) => {
      this.stringData = data;
      this.name.setValue(this.stringData['name']);
      this.email.setValue(this.stringData['email']);
      this.age.setValue(this.stringData['age']);
      this.dateOfBirth.setValue(this.stringData['dateOfBirth']);
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
}
