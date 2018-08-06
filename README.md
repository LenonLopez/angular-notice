# angular-notice
> Native Notifications

## Development
Updated repo to work with angular 6
Fixed security vulnerabilities due to gulp (I had to force update minimatch, which is one of its dependencies)

## Setup
1. Install angular-notice
```bash
	npm i angular-notice
```
2. Import Module
> import NotificationsModule and add it to the imports array within your app's module
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
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
```      
3. Import NativeNotificationService and inject
> import the NativeNotificationService in your app's component and inject it into your app's constructor
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
4. Call notify
> call the .notify() method off of the service.
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

## Notes
Chrome requires that a domain must have an SSL certificate for the notification to display.