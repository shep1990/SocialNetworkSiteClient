import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Profile {
  name: string;
  email: string;
  age: number;
  dateOfBirth: Date;
}
