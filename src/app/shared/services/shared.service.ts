import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message = new BehaviorSubject(new Profile);
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(profile: Profile) {
    this.message.next(profile)
  }
}
