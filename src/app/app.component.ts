import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string = 'ng2-notifications';
  description: string = 'Angular 2 Component for Native Push Notifications';

  constructor(private _service: NotificationService) {}
  notify(){
      const options =  { 
                        title: 'hello world',
                        body :'this is a notification body',
                        dir: 'ltr',
                        icon: "../assets/ng-shield.png",
                        closeDelay:2000
                      }
      this._service.notify(options);
  }
}
