import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../../services/error-handling/error-handler.service';

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.css']
})
export class InternalServerComponent implements OnInit {
  errorMsg: string;

  constructor(private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.errorMsg = this.errorHandlerService.errorMsg;
    console.log(this.errorMsg)
  }
}
