import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {
  public errorMessage: string = '';

  constructor(private router: Router) { }

  public handleError(error: HttpErrorResponse) {
    if (error.message != null) {
      this.errorView(error);
    }
  }

  private errorView(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/error']);
  }
  private createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
