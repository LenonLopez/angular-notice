import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class NotificationService implements OnDestroy {

  private instances: Notification[] = [];
  private _closeDelay: number;


  // private sound: string; Not currently supported by any browser -source: https://developer.mozilla.org/en-US/docs/Web/API/notification/sound
  // private renotify: boolean; Not currently supported by any browser -source: https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify
  // private sticky: boolean; Not currently supported by any broswer - source: https://developer.mozilla.org/en-US/docs/Web/API/Notification/sticky
  // private vibrate: Array<number>; Not currently supported by any broswer - source: https://developer.mozilla.org/en-US/docs/Web/API/Notification/vibrate
  // private noscreen: boolean = false; Not currently supported by any broswer - source: https://developer.mozilla.org/en-US/docs/Web/API/Notification/noscreen
  // private data: any; Only supported in webworkers -source: https://developer.mozilla.org/en-US/docs/Web/API/notification/data
  // private silent: boolean = true; Only supported in webworkers -source: https://developer.mozilla.org/en-US/docs/Web/API/notification/silent

  constructor() { }

  public ngOnDestroy(): void {
    this.closeAll();
  }
  private checkCompatibility() {
    return !!('Notification' in window);
  }
  private requestPermission(callback) {
    return Notification.requestPermission(callback);
  }
  private isPermissionGranted(permission) {
    return permission === 'granted';
  }
  private create(options) {

    const notification: Notification = new Notification(options.title, options);

    this.instances.push(notification);
    this.attachEventHandlers(notification);
    this.close(notification);

    return notification;
  }

  public notify(options) {

    if (!this.checkCompatibility()) {
      return console.log('Notification API not available in this browser.');
    }

    return this.requestPermission((permission) => {
      if (this.isPermissionGranted(permission)) {
        this._closeDelay = options.closeDelay;
        this.create(options);
      }
    });
  }

  private close(notification): void {
    if (this._closeDelay) {
      setTimeout(() => {
        notification.close();
      }, this._closeDelay);
    } else {
      notification.close();
    }
  }
  private closeAll(): void {
    this.instances.map(notification => this.close(notification));
    this.instances = [];
  }
  private attachEventHandlers(notification): void {


    notification.onclick = (event) => {
      // this.onClick.emit({ event, notification });
      console.log(event, notification);
    };

    notification.onerror = () => {
      // this.onError.emit({ notification });
      console.log(event, notification);
    };


    // No Longer supported in current api spec. 
    // in order to future proof this, I have disabled this event handler.
    // -source: https://developer.mozilla.org/en-US/docs/Web/API/Notification

    // notification.onshow = () => {
    //   this.onShow.emit({ notification });
    // };

    // notification.onclose = () => {
    //   this.onClose.emit({ notification });
    // };
  }


}
