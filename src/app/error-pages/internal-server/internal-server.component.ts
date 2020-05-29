import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.css']
})
export class InternalServerComponent implements OnInit {
  public errorMessage: string = "Oops, it seems there was an issue with the request, please try again";

  constructor() { }

  ngOnInit() {
  }
}
