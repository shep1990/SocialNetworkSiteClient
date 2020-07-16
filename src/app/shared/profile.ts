import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Profile {
  id: string;
  name: string;
  email: string;
  age: number;
  dateOfBirth: Date;
}
