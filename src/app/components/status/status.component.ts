import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatusService } from '../../services/status/status.service';
import { Profile } from '../../shared/profile';
import { SharedService } from '../../shared/services/shared.service';
import { ProfileService } from '../../services/profile/profile.service';
import { Status } from '../../shared/status';
import { User } from 'oidc-client';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusForm: FormGroup;
  statusList: Status[];

  constructor(
    private formBuilder: FormBuilder,
    private statusService: StatusService,
    private profileService: ProfileService,
    private sharedService: SharedService,
    private router: Router
  )
  {

  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe((profile: Profile) => {
      this.statusForm = this.formBuilder.group({
        name: profile['name'],
        status: ['']
      })
    })

    this.getStatusList();
  }

  getStatusList() {
    this.statusService.get().subscribe((data: Status[]) => {
      this.statusList = data;
    })
  }

  getUserProfile(userId: string) {
      this.profileService.getUserProfile(userId).subscribe((data: Profile) => {
        this.sharedService.nextMessage(data);
      })

      this.router.navigate(['profile'])
  }

  onSubmit() {
    this.statusService.post(this.statusForm.value).subscribe();
    this.getStatusList();
  }
}
