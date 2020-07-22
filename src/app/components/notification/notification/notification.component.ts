import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as signalR from '@aspnet/signalr';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.notificationApi)
      .build();

    connection.start().then(function () {
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (name: string, message: string) => {
      this.messageService.add({ severity: 'success', summary: message, detail: 'Via SignalR' });
    });
  }

}
