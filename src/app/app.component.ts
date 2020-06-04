import { Component, OnInit } from '@angular/core';

import * as signalR from '@aspnet/signalr';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.notificationApi)
      .build();

    connection.start().then(function () {
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (name: string, message: string) => {
      console.log(name, message);
    });
  }
}
