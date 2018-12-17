import { NativeNotificationService } from './angular-notice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string = 'angular notifications';
  description: string = 'angular service for Native Push Notifications';

  constructor(private _service: NativeNotificationService) {}
  notify(){
      const options =  { 
                        title: 'hello world',
                        body : 'this is a notification body',
                        dir: 'ltr',
                        icon: '../assets/ng-shield.png',
                        tag: 'notice',
                        closeDelay: 2000
                      };
      this._service.notify(options);
  }
}
