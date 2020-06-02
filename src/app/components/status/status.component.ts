import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StatusService } from '../../services/status/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.statusForm = this.formBuilder.group({
      status: [''],
    })
  }

  onSubmit() {
    this.statusService.post(this.statusForm.value).subscribe();
  }

}
