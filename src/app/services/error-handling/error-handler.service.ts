import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService {
  public errorMsg: string;
  constructor(private router: Router) { }
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        this.errorMsg = `Error: ${error.error.message}`;
        this.router.navigate(["/error"]);
      }
      else {
        this.errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        this.router.navigate(["/error"]);
      }
      return throwError(this.errorMsg);
    }
}
