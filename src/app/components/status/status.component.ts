import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatusService } from '../../services/status/status.service';
import { Profile } from '../../shared/profile';
import { SharedService } from '../../shared/services/shared.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private statusService: StatusService,
    private sharedService: SharedService
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

    this.statusService.get().subscribe((data: any) => {
        console.log(data)
    })
  }

  onSubmit() {
    this.statusService.post(this.statusForm.value).subscribe();
  }

}
