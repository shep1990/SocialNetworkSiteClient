import { Component, OnInit, Input } from '@angular/core';


import * as signalR from '@aspnet/signalr';
import { environment } from '../environments/environment';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  constructor(
    private messageService: MessageService,
  )
  {
  }

  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.notificationApi)
      .build();

    connection.start().then(function () {
    }).catch(function (err)
    {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (name: string, message: string) => {
      this.messageService.add({ severity:'success', summary: message, detail: 'Via SignalR' });
    });
  }
}
