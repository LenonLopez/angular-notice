# angular-notice
# Native Notifications

# 1. npm install angular-notice

# 2. Import Module
import NotificationsModule and add it to the imports array within your app's module
 
```typescript
 
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';
        import { NotificationsModule } from 'angular-notice'
        
        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            NotificationsModule
        ],
        providers: [NotificationsModule],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
```      
# 3.  import NativeNotificationService and inject

import the NativeNotificationService in your app's component and inject it into your app's constructor

```typescript
        import { Component } from '@angular/core';
        import { NativeNotificationService } from 'angular-notice/lib/native-notification.service';
        
        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
        
        export class AppComponent {
        title = 'app';

        constructor(private _service: NativeNotificationService) {}
 
        }
```
# 4. call notify
    
call the .notify() method off of the service.
```typescript
          someMethodThatGetsCalledWithinComponent(){
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
```