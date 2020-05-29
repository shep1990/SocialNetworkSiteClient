import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ErrorHandlerService } from '../services/error-handling/error-handler.service';
import { AuthService } from '../services/authentication/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  stringData: {};
  public errorMessage: string = '';

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  )
  {
  }

  ngOnInit() {
    this.getProfile();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    })
  }

  get getFormControl() {
    return this.registerForm.controls;
  }

  getProfile() {
    this.profileService.get().subscribe((data: {}) => {
      this.stringData = data;

      this.registerForm.setValue({
        name: this.stringData['name'],
        email: this.stringData['email'],
        age: this.stringData['age'],
        dateOfBirth: this.stringData['dateOfBirth']
      });
    })
  }

  onSubmit() {
    this.profileService.put(this.registerForm.value).subscribe();
  }
}
