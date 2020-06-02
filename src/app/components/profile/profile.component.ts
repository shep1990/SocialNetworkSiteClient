import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  stringData: {};

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  )
  {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    })
    this.getProfile();
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
