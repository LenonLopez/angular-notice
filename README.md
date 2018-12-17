# angular-notice
> Native Notifications

## Development
* Updated for angular 7
* npm module now created via the angular CLI, this will result in faster and easier updates
* Fixed security vulnerabilities within dependencies
* Simplified import. No longer do you need to import a module - it is now a pure service that gets added to your main app module's providers array. This forces the notifications service to be a singleton. If you need seperate instances for all your components, then simply import the service into that particular component's providers array.

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
        import { NativeNotificationsService } from 'angular-notice'
        
        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule            
        ],
        providers: [NativeNotificationsService], // add to your module's providers array
        bootstrap: [AppComponent]
        })
        export class AppModule { }
```      
3. Import NativeNotificationService and inject
> import the NativeNotificationService in your app's component and inject it into your app's constructor
```typescript
        import { Component } from '@angular/core';
        import { NativeNotificationService } from 'angular-notice'; // import within component
        
        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
        
        export class AppComponent {
        title = 'app';

        constructor(private _service: NativeNotificationService) {} // angular will inject the service here via dependency injection
 
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
Mobile version of chrome seems to ignore notifications - this is an issue that i'm looking into.
