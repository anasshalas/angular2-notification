# Notification with Toastr in Angular 2 

ng2-toastr has added animation for displaying/dismissing toasts The lib is inspired by [angular-toastr] (https://github.com/Foxandxss/angular-toastr),
and will show bootstrap-like toasts.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.


#Usage

1.	Install ng2-toastr using npm:
    npm install ng2-toastr –save

2.	Include js and css files in angular-cli.json:

	"styles": [
        "styles.css",
		"../node_modules/ng2-toastr/bundles/ng2-toastr.min.css"
      ],
	  
    "scripts": [
	   "../node_modules/ng2-toastr/bundles/ng2-toastr.min.js"
	  ]


3.	Add ToastModule into your AppModule class. app.module.ts would look like this:
    
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';
    import {AppComponent} from './app.component';
    import {ToastModule} from 'ng2-toastr/ng2-toastr';
    
    @NgModule({
      imports: [BrowserModule, ToastModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
    })
    export class AppModule {
    
    }

4.	Inject 'ToastsManager' class in your component class.
     
	import { Component } from '@angular/core';
    import { ToastsManager } from 'ng2-toastr/ng2-toastr';
    
    @Component({
      selector: 'app-root',
      template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>'
    })
    export class AppComponent {
    
      constructor(public toastr: ToastsManager) {
      }
        
      showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
      
      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }
    }
	
	

