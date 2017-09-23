import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class NotificationService implements OnDestroy {

  private instances: Notification[] = [];

  private title: string = 'hello world';
  private body: string = 'this is a notification body';
  private dir: NotificationDirection = 'ltr';
  private icon: string = "../assets/ng-shield.png";
  private lang: string;
  private tag: string;
  private closeDelay: number = 2000;

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
  private create() {

    const options: NotificationOptions = {
      body: this.body,
      dir: this.dir,
      icon: this.icon,
      lang: this.lang,
      tag: this.tag,
    }
    const notification: Notification = new Notification(this.title, options);

    this.instances.push(notification);
    // this.attachEventHandlers(notification);
    this.close(notification);

    return notification;
  }

  public notify({body,dir,
    icon,
    lang,
    tag,
  }) {
    if (!this.checkCompatibility()) {
      return console.log('Notification API not available in this browser.');
    }

    return this.requestPermission((permission) => {
      if (this.isPermissionGranted(permission)) {
        this.create();
      }
    });
  }

  private close(notification): void {
    if (this.closeDelay) {
      setTimeout(() => {
        notification.close();
      }, this.closeDelay);
    } else {
      notification.close();
    }
  }
  private closeAll(): void {
    this.instances.map(notification => this.close(notification));
    this.instances = [];
  }
  private attachEventHandlers(notification): void {
    // notification.onshow = () => {
    //   this.onShow.emit({ notification });
    // };

    // notification.onclick = (event) => {
    //   this.onClick.emit({ event, notification });
    // };

    // notification.onerror = () => {
    //   this.onError.emit({ notification });
    // };

    // notification.onclose = () => {
    //   this.onClose.emit({ notification });
    // };
  }


}
