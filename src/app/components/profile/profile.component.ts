import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Profile } from '../../shared/profile';
import { SharedService } from '../../shared/services/shared.service';
import { FriendManagementService } from '../../services/friend/friend-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  profileUserId;

  constructor(
    private profileService: ProfileService,
    private friendService: FriendManagementService,
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
    this.profileService.get().subscribe((data: Profile) => {
      this.registerForm.setValue({
        name: data['name'],
        email: data['email'],
        age: data['age'],
        dateOfBirth: data['dateOfBirth']
      });

      this.profileUserId = data.id;
    })
  }

  addFriend(userId: string) {
    this.friendService.addFriendRequest(userId).subscribe();
  }

  onSubmit() {
    this.profileService.put(this.registerForm.value).subscribe();
  }
}
