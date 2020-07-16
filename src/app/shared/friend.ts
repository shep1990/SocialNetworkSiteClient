import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Friend {
  RequestUserId: string;
  TargetUserId: string;
}
